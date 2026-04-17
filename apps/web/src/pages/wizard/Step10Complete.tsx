import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Flex, Alert } from "@derbysoft/neat-design"
import type { AssetType } from "@hotel-copy/shared"
import { generationApi, projectsApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"

const ASSET_TYPES: { type: AssetType; label: string }[] = [
  { type: "HEADLINE", label: "Headlines" },
  { type: "DESCRIPTION", label: "Descriptions" },
  { type: "LONG_HEADLINE", label: "Long Headlines" },
]

export default function Step10Complete() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { generationId, hotels, selectedLanguages, assets } = useWizardStore()
  const [exporting, setExporting] = useState<AssetType | null>(null)
  const [violations, setViolations] = useState<Record<AssetType, number>>({} as Record<AssetType, number>)
  const [error, setError] = useState<string | null>(null)
  const [forking, setForking] = useState(false)

  const assetCount = assets.length

  async function handleExport(assetType: AssetType) {
    if (!id || !generationId) return
    setExporting(assetType)
    setError(null)
    try {
      const { blob, filename, violationCount } = await generationApi.export(id, generationId, assetType)
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      a.click()
      URL.revokeObjectURL(url)
      setViolations((prev) => ({ ...prev, [assetType]: violationCount }))
    } catch {
      setError(`Export failed for ${assetType}. Please try again.`)
    } finally {
      setExporting(null)
    }
  }

  async function handleFork() {
    if (!id) return
    setForking(true)
    try {
      const { newProjectId } = await projectsApi.fork(id)
      navigate(`/projects/${newProjectId}/wizard/1`)
    } catch {
      setError("Failed to fork project. Please try again.")
      setForking(false)
    }
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Content complete!</h2>
        <p>Your ad assets have been reviewed and approved.</p>
      </div>

      <div className="complete-stats">
        <span>{hotels.length} hotel{hotels.length !== 1 ? "s" : ""}</span>
        <span className="stat-divider">·</span>
        <span>{selectedLanguages.length} language{selectedLanguages.length !== 1 ? "s" : ""}</span>
        <span className="stat-divider">·</span>
        <span>{assetCount} asset{assetCount !== 1 ? "s" : ""}</span>
      </div>

      {error && <Alert type="error" message={error} />}

      <Flex vertical gap={16}>
        <h3>Download CSV exports</h3>
        {ASSET_TYPES.map(({ type, label }) => (
          <Flex key={type} justify="space-between" align="center" gap={16} className="export-row">
            <Flex vertical gap={4}>
              <strong>{label}</strong>
              {violations[type] !== undefined && (
                violations[type] > 0
                  ? <Alert type="warning" message={`${violations[type]} character limit violations`} />
                  : <Alert type="success" message="No violations" />
              )}
            </Flex>
            <Button
              type="primary"
              loading={exporting === type}
              disabled={!!exporting || !generationId}
              onClick={() => handleExport(type)}
            >
              Download CSV
            </Button>
          </Flex>
        ))}
      </Flex>

      <div className="complete-fork-section">
        <p>Need to change settings or run a new version?</p>
        <Button onClick={handleFork} loading={forking} disabled={forking}>
          {forking ? "Forking…" : "Fork this project →"}
        </Button>
      </div>

      <div className="step-nav">
        <Button onClick={() => navigate("/dashboard")}>← Back to Dashboard</Button>
        <span />
      </div>
    </div>
  )
}
