import { useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Tag, Flex, Input } from "@derbysoft/neat-design"
import { LANGUAGES } from "@hotel-copy/shared"
import { generationApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"
import ApplyRecipeModal from "../../components/ApplyRecipeModal"
import type { GeneratedAsset } from "@hotel-copy/shared"

const ASSET_TYPE_LABELS: Record<string, string> = {
  HEADLINE: "Headline",
  DESCRIPTION: "Description",
  LONG_HEADLINE: "Long Headline",
}

export default function Step8Review() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const {
    hotels,
    assets,
    selectedLanguages,
    generationId,
    approvedHotelCodes,
    reviewHotelIndex,
    recipeModalDismissed,
    spotCheckResults,
    setReviewHotelIndex,
    approveHotel,
    unapproveHotel,
    setAssets,
  } = useWizardStore()

  const [selectedLang, setSelectedLang] = useState(selectedLanguages[0] ?? "en")
  const [editingAssetId, setEditingAssetId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")
  const [saving, setSaving] = useState(false)
  const [refinePrompt, setRefinePrompt] = useState("")
  const [showRefine, setShowRefine] = useState(false)
  const [regenerating, setRegenerating] = useState(false)
  const [approving, setApproving] = useState(false)
  const [showRecipeModal, setShowRecipeModal] = useState(false)

  // Hotel queue: rejected first → unapproved → approved
  const hotelQueue = useMemo(() => {
    const rejected = hotels.filter((h) => spotCheckResults[h.hotelCode] === "rejected")
    const unapproved = hotels.filter(
      (h) => !approvedHotelCodes.has(h.hotelCode) && spotCheckResults[h.hotelCode] !== "rejected"
    )
    const approved = hotels.filter(
      (h) => approvedHotelCodes.has(h.hotelCode) && spotCheckResults[h.hotelCode] !== "rejected"
    )
    return [...rejected, ...unapproved, ...approved]
  }, [hotels, approvedHotelCodes, spotCheckResults])

  const currentHotel = hotelQueue[reviewHotelIndex]
  const isApproved = currentHotel ? approvedHotelCodes.has(currentHotel.hotelCode) : false

  const hotelAssets = useMemo(
    () => assets.filter((a) => a.hotelCode === currentHotel?.hotelCode),
    [assets, currentHotel]
  )

  const assetsByType = useMemo(() => {
    const groups: Record<string, GeneratedAsset[]> = {}
    for (const a of hotelAssets) {
      if (!groups[a.assetType]) groups[a.assetType] = []
      groups[a.assetType].push(a)
    }
    return groups
  }, [hotelAssets])

  function langName(code: string) {
    return LANGUAGES.find((l) => l.code === code)?.name ?? code
  }

  function startEdit(asset: GeneratedAsset) {
    const copy = (asset.copies as unknown as Record<string, string>)[selectedLang] ?? ""
    setEditingAssetId(asset.id)
    setEditValue(copy)
  }

  async function saveEdit(asset: GeneratedAsset) {
    if (!id || !generationId) return
    setSaving(true)
    try {
      const updatedCopies = { ...(asset.copies as unknown as Record<string, string>), [selectedLang]: editValue }
      const updated = await generationApi.editAsset(id, generationId, asset.id, updatedCopies)
      setAssets(assets.map((a) => (a.id === updated.id ? updated : a)))
      setEditingAssetId(null)
    } finally {
      setSaving(false)
    }
  }

  async function handleRegenerate() {
    if (!id || !generationId || !currentHotel) return
    setRegenerating(true)
    try {
      await generationApi.regenerateUnlocked(id, generationId, [], refinePrompt || undefined)
      await new Promise<void>((resolve) => {
        const timer = setInterval(async () => {
          const gen = await generationApi.status(id, generationId)
          if (gen.status === "COMPLETE" || gen.status === "FAILED") {
            clearInterval(timer)
            resolve()
          }
        }, 3000)
      })
      const freshAssets = await generationApi.assets(id, generationId)
      setAssets(freshAssets)
      setShowRefine(false)
      setRefinePrompt("")
    } finally {
      setRegenerating(false)
    }
  }

  async function handleApprove() {
    if (!id || !generationId || !currentHotel) return
    setApproving(true)
    try {
      const result = await generationApi.approveHotel(id, generationId, currentHotel.hotelCode)
      approveHotel(currentHotel.hotelCode)

      const wasFirst = result.approvedHotelCodes.length === 1
      const remainingUnapproved = hotels
        .map((h) => h.hotelCode)
        .filter((c) => !result.approvedHotelCodes.includes(c))

      if (wasFirst && !recipeModalDismissed && remainingUnapproved.length > 0) {
        setShowRecipeModal(true)
        return
      }

      if (remainingUnapproved.length === 0) {
        navigate(`/projects/${id}/wizard/9`)
        return
      }

      // Move to next unapproved hotel
      const nextIdx = hotelQueue.findIndex(
        (h, i) => i > reviewHotelIndex && !result.approvedHotelCodes.includes(h.hotelCode)
      )
      if (nextIdx !== -1) {
        setReviewHotelIndex(nextIdx)
      }
    } finally {
      setApproving(false)
    }
  }

  async function handleRevoke() {
    if (!id || !generationId || !currentHotel) return
    await generationApi.unapproveHotel(id, generationId, currentHotel.hotelCode)
    unapproveHotel(currentHotel.hotelCode)
  }

  if (!currentHotel) {
    return (
      <div className="wizard-step">
        <p>No hotels to review.</p>
        <Button type="primary" onClick={() => navigate(`/projects/${id}/wizard/9`)}>
          Continue to spot-check →
        </Button>
      </div>
    )
  }

  const unapprovedCodesForModal = hotels
    .map((h) => h.hotelCode)
    .filter((c) => c !== currentHotel.hotelCode && !approvedHotelCodes.has(c))

  return (
    <div className="wizard-step review-step">
      {/* Hotel queue nav */}
      <div className="hotel-queue-nav">
        <Flex align="center" gap={8}>
          <Button
            onClick={() => setReviewHotelIndex(Math.max(0, reviewHotelIndex - 1))}
            disabled={reviewHotelIndex === 0}
          >
            ←
          </Button>
          <span className="hotel-queue-counter">
            Hotel {reviewHotelIndex + 1} of {hotelQueue.length}
          </span>
          <Button
            onClick={() => setReviewHotelIndex(Math.min(hotelQueue.length - 1, reviewHotelIndex + 1))}
            disabled={reviewHotelIndex === hotelQueue.length - 1}
          >
            →
          </Button>
        </Flex>
      </div>

      {/* Hotel header */}
      <div className="review-hotel-header">
        <Flex justify="space-between" align="flex-start">
          <Flex vertical gap={4}>
            <h2 className="review-hotel-name">{currentHotel.hotelName}</h2>
            <Flex gap={8} align="center">
              <Tag color="neutral">{currentHotel.chain}</Tag>
              <Tag color="neutral">{currentHotel.brand}</Tag>
              <span className="review-hotel-location">{currentHotel.city}, {currentHotel.country}</span>
            </Flex>
          </Flex>
          <Flex gap={8}>
            {isApproved && <Tag color="green">Approved ✓</Tag>}
            {spotCheckResults[currentHotel.hotelCode] === "rejected" && (
              <Tag color="red">Needs revision</Tag>
            )}
          </Flex>
        </Flex>
      </div>

      {/* Language selector */}
      <Flex align="center" gap={8} className="review-controls">
        <label>Language:</label>
        <select
          className="review-lang-select"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          {selectedLanguages.map((code) => (
            <option key={code} value={code}>{langName(code)}</option>
          ))}
        </select>
      </Flex>

      {/* Assets */}
      <div className="review-asset-list">
        {(["HEADLINE", "DESCRIPTION", "LONG_HEADLINE"] as const).map((type) => {
          const typeAssets = assetsByType[type]
          if (!typeAssets || typeAssets.length === 0) return null
          return (
            <div key={type} className="review-asset-group">
              <div className="review-asset-group-label">{ASSET_TYPE_LABELS[type]}</div>
              {typeAssets.map((asset) => {
                const copy = (asset.copies as unknown as Record<string, string>)[selectedLang] ?? ""
                const isEditing = editingAssetId === asset.id
                return (
                  <div key={asset.id} className={`review-asset-card${asset.isEdited ? " edited" : ""}`}>
                    <div className="review-asset-label">{asset.variantLabel}</div>
                    {isEditing ? (
                      <Flex vertical gap={8}>
                        <Input.TextArea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          rows={3}
                          autoFocus
                        />
                        <Flex gap={8}>
                          <Button type="primary" onClick={() => saveEdit(asset)} loading={saving} disabled={saving}>
                            Save
                          </Button>
                          <Button onClick={() => setEditingAssetId(null)} disabled={saving}>
                            Cancel
                          </Button>
                        </Flex>
                      </Flex>
                    ) : (
                      <div className="review-asset-text" onClick={() => startEdit(asset)}>
                        {copy || <em>No copy</em>}
                        {asset.isEdited && <Tag color="blue">Edited</Tag>}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Refine prompt */}
      <div className="refine-section">
        <Button onClick={() => setShowRefine(!showRefine)}>
          {showRefine ? "Hide refine prompt" : "Refine with a prompt"}
        </Button>
        {showRefine && (
          <Flex vertical gap={8} className="refine-content">
            <Input.TextArea
              value={refinePrompt}
              onChange={(e) => setRefinePrompt(e.target.value)}
              rows={3}
              placeholder="e.g. Make it more aspirational, avoid mentioning prices"
            />
            <Button
              type="primary"
              onClick={handleRegenerate}
              loading={regenerating}
              disabled={regenerating}
            >
              {regenerating ? "Regenerating…" : "Regenerate this hotel"}
            </Button>
          </Flex>
        )}
      </div>

      {/* Approve / Revoke */}
      <div className="approve-btn-row">
        {isApproved ? (
          <Button onClick={handleRevoke}>Revoke approval</Button>
        ) : (
          <Button
            type="primary"
            onClick={handleApprove}
            loading={approving}
            disabled={approving}
          >
            {approving ? "Approving…" : "Approve hotel →"}
          </Button>
        )}
      </div>

      {/* Recipe modal */}
      {id && generationId && (
        <ApplyRecipeModal
          open={showRecipeModal}
          projectId={id}
          generationId={generationId}
          approvedHotelCode={currentHotel.hotelCode}
          unapprovedHotelCodes={unapprovedCodesForModal}
          onComplete={() => {
            setShowRecipeModal(false)
            navigate(`/projects/${id}/wizard/9`)
          }}
        />
      )}
    </div>
  )
}
