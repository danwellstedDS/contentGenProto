import { useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Tag, Flex, Alert } from "@derbysoft/neat-design"
import { LANGUAGES } from "@hotel-copy/shared"
import { generationApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"
import type { GeneratedAsset } from "@hotel-copy/shared"

const ASSET_TYPE_LABELS: Record<string, string> = {
  HEADLINE: "Headline",
  DESCRIPTION: "Description",
  LONG_HEADLINE: "Long Headline",
}

export default function Step9SpotCheck() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const {
    hotels,
    assets,
    selectedLanguages,
    generationId,
    approvedHotelCodes,
    sampledHotelCodes,
    spotCheckResults,
    setSpotCheckResult,
    setReviewHotelIndex,
  } = useWizardStore()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLang, setSelectedLang] = useState(selectedLanguages[0] ?? "en")
  const [autoApproving, setAutoApproving] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const sampled = sampledHotelCodes.length > 0 ? sampledHotelCodes : hotels.map((h) => h.hotelCode).slice(0, 5)
  const currentCode = sampled[currentIndex]
  const currentHotel = hotels.find((h) => h.hotelCode === currentCode)

  const hotelAssets = useMemo(
    () => assets.filter((a) => a.hotelCode === currentCode),
    [assets, currentCode]
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

  const reviewedCount = Object.keys(spotCheckResults).filter((c) => sampled.includes(c)).length
  const allReviewed = reviewedCount === sampled.length
  const anyRejected = sampled.some((c) => spotCheckResults[c] === "rejected")

  async function handleDecision(decision: "approved" | "rejected") {
    if (!currentCode) return
    setSpotCheckResult(currentCode, decision)

    const nextIndex = currentIndex + 1
    if (nextIndex < sampled.length) {
      setCurrentIndex(nextIndex)
    } else {
      setShowResult(true)
    }
  }

  async function handleAutoApproveAndComplete() {
    if (!id || !generationId) return
    setAutoApproving(true)
    try {
      const remaining = hotels
        .map((h) => h.hotelCode)
        .filter((c) => !approvedHotelCodes.has(c) && !sampled.includes(c))
      await generationApi.autoApprove(id, generationId, remaining)
      navigate(`/projects/${id}/wizard/10`)
    } finally {
      setAutoApproving(false)
    }
  }

  function handleBackToReview() {
    // Rejected hotels will sort to front of queue in Step8
    setReviewHotelIndex(0)
    navigate(`/projects/${id}/wizard/8`)
  }

  if (!currentHotel && !showResult) {
    return (
      <div className="wizard-step">
        <p>No hotels to spot-check.</p>
        <Button type="primary" onClick={() => navigate(`/projects/${id}/wizard/10`)}>
          Continue →
        </Button>
      </div>
    )
  }

  if (showResult) {
    const rejectedCodes = sampled.filter((c) => spotCheckResults[c] === "rejected")
    return (
      <div className="wizard-step">
        <div className="step-heading">
          <h2>Spot-check complete</h2>
        </div>

        {anyRejected ? (
          <Flex vertical gap={16}>
            <Alert
              type="warning"
              message={`${rejectedCodes.length} hotel${rejectedCodes.length !== 1 ? "s" : ""} need revision`}
              description="The rejected hotels have been added to the front of your review queue."
            />
            <Button type="primary" onClick={handleBackToReview}>
              ← Back to Review
            </Button>
          </Flex>
        ) : (
          <Flex vertical gap={16}>
            <Alert
              type="success"
              message="All sampled hotels approved!"
              description="We'll auto-approve the remaining hotels and mark this project as complete."
            />
            <Button
              type="primary"
              onClick={handleAutoApproveAndComplete}
              loading={autoApproving}
              disabled={autoApproving}
            >
              {autoApproving ? "Completing…" : "Complete project →"}
            </Button>
          </Flex>
        )}
      </div>
    )
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Spot-check</h2>
        <p>Review a sample of hotels to confirm quality before approving the rest.</p>
      </div>
      <div className="hotel-queue-nav">
        <span className="hotel-queue-counter">Hotel {currentIndex + 1} of {sampled.length}</span>
      </div>

      {/* Hotel header */}
      <div className="review-hotel-header">
        <Flex vertical gap={4}>
          <h3 className="review-hotel-name">{currentHotel!.hotelName}</h3>
          <Flex gap={8} align="center">
            {currentHotel!.chainName && <Tag color="neutral">{currentHotel!.chainName}</Tag>}
            {currentHotel!.brandName && <Tag color="neutral">{currentHotel!.brandName}</Tag>}
            <span className="review-hotel-location">{currentHotel!.city}, {currentHotel!.country}</span>
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

      {/* Assets (read-only) */}
      <div className="review-asset-list">
        {(["HEADLINE", "DESCRIPTION", "LONG_HEADLINE"] as const).map((type) => {
          const typeAssets = assetsByType[type]
          if (!typeAssets || typeAssets.length === 0) return null
          return (
            <div key={type} className="review-asset-group">
              <div className="review-asset-group-label">{ASSET_TYPE_LABELS[type]}</div>
              {typeAssets.map((asset) => {
                const copy = (asset.copies as unknown as Record<string, string>)[selectedLang] ?? ""
                return (
                  <div key={asset.id} className="review-asset-card">
                    <div className="review-asset-label">{asset.variantLabel}</div>
                    <div className="review-asset-text">{copy || <em>No copy</em>}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Approve / Reject */}
      <div className="spot-check-actions">
        <Button onClick={() => handleDecision("rejected")} className="reject-btn">
          Reject
        </Button>
        <Button type="primary" onClick={() => handleDecision("approved")}>
          Approve →
        </Button>
      </div>
    </div>
  )
}
