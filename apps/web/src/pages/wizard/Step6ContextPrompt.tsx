import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Input, Flex } from "@derbysoft/neat-design"
import { generationApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"
import WizardActionBar from "../../components/WizardActionBar"

const SUGGESTED_BRIEFS = [
  "Summer holiday campaign targeting leisure travellers and couples. Aspirational and inspirational tone. Highlight your property's unique character and local experiences.",
  "Direct booking push across all properties. Emphasise best rate available, flexible cancellation and the benefits of booking through the hotel site only. Tone: friendly but with a clear urgency edge.",
  "Early booking campaign with an urgency angle. Promote 25% early bird offer where available. Tone is friendly but time-sensitive. Make it clear the offer won't last.",
]

export default function Step6ContextPrompt() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const {
    selectedLanguages,
    generationName,
    campaignContext,
    setGenerationName,
    setCampaignContext,
    setGenerationId,
    setGenerationStatus,
    advanceTo,
  } = useWizardStore()
  const [triggering, setTriggering] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate() {
    if (!id) return
    setTriggering(true)
    setError(null)
    try {
      const { generationId } = await generationApi.trigger(id, {
        languages: selectedLanguages,
        campaignContext: campaignContext || undefined,
        name: generationName || undefined,
      })
      setGenerationId(generationId)
      setGenerationStatus("PENDING")
      advanceTo(7)
      navigate(`/projects/${id}/wizard/7`)
    } catch {
      setError("Failed to start generation. Please try again.")
      setTriggering(false)
    }
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Your brief</h2>
        <p>
          Give us broader context before generating. The more specific you are, the more accurate
          and on-message the content will be.
        </p>
      </div>

      <Flex vertical gap={16}>
        <Flex vertical gap={4}>
          <label className="form-label">Generation name (optional)</label>
          <Input
            value={generationName}
            onChange={(e) => setGenerationName(e.target.value)}
            placeholder="e.g. Q2 2026 Summer Campaign"
          />
        </Flex>

        <Flex vertical gap={4}>
          <label className="form-label">Campaign brief</label>
          <Input.TextArea
            value={campaignContext}
            onChange={(e) => setCampaignContext(e.target.value)}
            rows={5}
            placeholder="Describe the campaign goal, tone, and any key messages…"
          />
        </Flex>

        <Flex vertical gap={8}>
          <label className="form-label">Suggested briefs — click to use</label>
          <div className="brief-suggestions">
            {SUGGESTED_BRIEFS.map((brief) => (
              <div
                key={brief}
                className="brief-suggestion"
                onClick={() => setCampaignContext(brief)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setCampaignContext(brief)}
              >
                {brief}
              </div>
            ))}
          </div>
        </Flex>
      </Flex>

      {error && <p className="step-error">{error}</p>}

      <WizardActionBar
        onBack={() => navigate(`/projects/${id}/wizard/5`)}
        backDisabled={triggering}
        primaryLabel="Generate →"
        onPrimary={handleGenerate}
        primaryDisabled={triggering}
        primaryLoading={triggering}
      />
    </div>
  )
}
