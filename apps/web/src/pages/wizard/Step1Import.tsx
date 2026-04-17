import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Alert, Flex, Card } from "@derbysoft/neat-design"
import { hotelsApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"
import ImportDropzone from "../../components/ImportDropzone"

export default function Step1Import() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { importResult, setImportResult, setHotels, advanceTo } = useWizardStore()
  const [importing, setImporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(file: File) {
    if (!id) return
    setImporting(true)
    setError(null)
    try {
      const result = await hotelsApi.import(id, file)
      setImportResult(result)
      const hotels = await hotelsApi.list(id)
      setHotels(hotels)
      advanceTo(2)
    } catch {
      setError("Import failed. Check the file format and try again.")
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Import hotel data</h2>
        <p>Upload your XLSX file to load hotel profiles into this project.</p>
      </div>

      {error && <Alert type="error" message={error} />}

      {importing ? (
        <Card>
          <Flex vertical align="center" gap={8}>
            <p style={{ margin: 0, color: "#666" }}>Importing your hotels…</p>
          </Flex>
        </Card>
      ) : (
        <ImportDropzone onFile={handleFile} disabled={importing} />
      )}

      {importResult && (
        <Flex vertical gap={10}>
          <Alert
            type="success"
            message={`${importResult.imported} hotel${importResult.imported !== 1 ? "s" : ""} imported${importResult.skipped > 0 ? `, ${importResult.skipped} skipped` : ""}`}
          />
          {importResult.warnings.length > 0 && (
            <Card>
              <Flex vertical gap={8}>
                <strong>Warnings ({importResult.warnings.length})</strong>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, color: "#666" }}>
                  {importResult.warnings.slice(0, 10).map((w, i) => <li key={i}>{w}</li>)}
                  {importResult.warnings.length > 10 && (
                    <li>…and {importResult.warnings.length - 10} more</li>
                  )}
                </ul>
              </Flex>
            </Card>
          )}
        </Flex>
      )}

      <div className="step-nav">
        <span />
        <Button
          type="primary"
          disabled={!importResult}
          onClick={() => navigate(`/projects/${id}/wizard/2`)}
        >
          Next: Select hotels →
        </Button>
      </div>
    </div>
  )
}
