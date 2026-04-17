import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Flex } from "@derbysoft/neat-design"
import { generationApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"

export default function Step5ContextFork() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { selectedLanguages, generationName, setGenerationId, setGenerationStatus, advanceTo } = useWizardStore()
  const [triggering, setTriggering] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function skipAndGenerate() {
    if (!id) return
    setTriggering(true)
    setError(null)
    try {
      const { generationId } = await generationApi.trigger(id, {
        languages: selectedLanguages,
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

  function addContext() {
    navigate(`/projects/${id}/wizard/6`)
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Campaign context</h2>
        <p>Would you like to provide additional context before generating?</p>
      </div>

      {error && <p className="step-error">{error}</p>}

      <div className="option-cards">
        <div
          className={`option-card${triggering ? " option-card-disabled" : ""}`}
          onClick={!triggering ? skipAndGenerate : undefined}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => !triggering && e.key === "Enter" && skipAndGenerate()}
        >
          <div className="option-card-header">
            <span className="option-card-title">
              {triggering ? "Starting generation…" : "Skip — generate now"}
            </span>
          </div>
          <p className="option-card-desc">
            Generate content using your hotel profiles, selected languages, and campaign type.
            No additional context required.
          </p>
        </div>

        <div
          className="option-card"
          onClick={addContext}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && addContext()}
        >
          <div className="option-card-header">
            <span className="option-card-title">Add campaign context</span>
          </div>
          <p className="option-card-desc">
            Provide a brief or goal to help guide tone, messaging, and focus across all hotels.
            Recommended for targeted campaigns.
          </p>
        </div>
      </div>

      <div className="step-nav">
        <Button onClick={() => navigate(`/projects/${id}/wizard/4`)} disabled={triggering}>← Back</Button>
        <span />
      </div>
    </div>
  )
}
