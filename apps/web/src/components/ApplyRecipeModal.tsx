import { useState, useRef, useEffect } from "react"
import { Modal, Button, Flex } from "@derbysoft/neat-design"
import { generationApi } from "../services/api"
import { useWizardStore } from "../store/wizardStore"
import type { GeneratedAsset } from "@hotel-copy/shared"

interface Props {
  open: boolean
  projectId: string
  generationId: string
  approvedHotelCode: string
  unapprovedHotelCodes: string[]
  onComplete: () => void
}

function randomSample<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}

export default function ApplyRecipeModal({
  open,
  projectId,
  generationId,
  approvedHotelCode,
  unapprovedHotelCodes,
  onComplete,
}: Props) {
  const { campaignContext, assets, setRecipeModalDismissed, setSampledHotelCodes } = useWizardStore()
  const defaultSample = Math.min(5, unapprovedHotelCodes.length)
  const [sampleSize, setSampleSize] = useState(defaultSample)
  const [applying, setApplying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setSampleSize(Math.min(5, unapprovedHotelCodes.length))
  }, [unapprovedHotelCodes.length])

  function buildSample(size: number) {
    const n = Math.max(1, Math.min(size, unapprovedHotelCodes.length))
    return randomSample(unapprovedHotelCodes, n)
  }

  async function handleApply() {
    setApplying(true)
    setError(null)
    try {
      // Build approved assets list from store
      const approvedAssets: Array<{ variantCode: string; assetType: string; copies: Record<string, string> }> =
        assets
          .filter((a: GeneratedAsset) => a.hotelCode === approvedHotelCode)
          .map((a: GeneratedAsset) => ({
            variantCode: a.variantCode,
            assetType: a.assetType,
            copies: a.copies as unknown as Record<string, string>,
          }))

      // 1. Extract recipe
      const { recipe } = await generationApi.extractRecipe(
        projectId,
        generationId,
        approvedHotelCode,
        approvedAssets,
        campaignContext ?? ""
      )

      // 2. Apply recipe (fires background job)
      await generationApi.applyRecipe(projectId, generationId, recipe, approvedHotelCode, false)

      // 3. Poll until complete
      await new Promise<void>((resolve, reject) => {
        pollRef.current = setInterval(async () => {
          try {
            const gen = await generationApi.status(projectId, generationId)
            if (gen.status === "COMPLETE") {
              clearInterval(pollRef.current!)
              resolve()
            } else if (gen.status === "FAILED") {
              clearInterval(pollRef.current!)
              reject(new Error(gen.errorMessage ?? "Recipe application failed"))
            }
          } catch (e) {
            clearInterval(pollRef.current!)
            reject(e)
          }
        }, 3000)
      })

      setRecipeModalDismissed(true)
      setSampledHotelCodes(buildSample(sampleSize))
      onComplete()
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
      setApplying(false)
    }
  }

  function handleSkip() {
    setRecipeModalDismissed(true)
    setSampledHotelCodes(buildSample(sampleSize))
    onComplete()
  }

  return (
    <Modal
      open={open}
      title="Apply your writing style to remaining hotels?"
      footer={null}
      closable={!applying}
      maskClosable={false}
    >
      <Flex vertical gap={16}>
        <p>
          We can extract the writing style, tone, and structure from your approved hotel and
          apply it across all remaining hotels before you review them. This speeds up the
          review process significantly.
        </p>

        <Flex vertical gap={4}>
          <label>How many hotels would you like to spot-check after applying?</label>
          <input
            type="number"
            className="sample-size-input"
            value={sampleSize}
            min={1}
            max={unapprovedHotelCodes.length}
            onChange={(e) => setSampleSize(Math.max(1, parseInt(e.target.value, 10) || 1))}
            disabled={applying}
          />
          <small>
            {unapprovedHotelCodes.length} hotel{unapprovedHotelCodes.length !== 1 ? "s" : ""} remaining
          </small>
        </Flex>

        {error && <p className="step-error">{error}</p>}

        {applying && (
          <p className="modal-applying-text">Applying writing style… this may take a moment.</p>
        )}

        <Flex gap={8} justify="flex-end">
          <Button onClick={handleSkip} disabled={applying}>
            Skip
          </Button>
          <Button type="primary" onClick={handleApply} loading={applying} disabled={applying}>
            {applying ? "Applying…" : "Apply style"}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  )
}
