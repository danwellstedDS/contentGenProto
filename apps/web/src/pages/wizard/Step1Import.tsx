import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Alert, Flex } from "@derbysoft/neat-design"
import { Modal } from "antd"
import { hotelsApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"
import ImportDropzone from "../../components/ImportDropzone"
import WizardActionBar from "../../components/WizardActionBar"

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

type ImportMode = "replace" | "merge"

interface PendingUpload {
  file: File
}

export default function Step1Import() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { importResult, setImportResult, hotels, setHotels, advanceTo } = useWizardStore()
  const [importing, setImporting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingUpload, setPendingUpload] = useState<PendingUpload | null>(null)

  const hasHotels = hotels.length > 0
  const latestUpdatedAt = hasHotels
    ? hotels.reduce((latest, h) => (h.updatedAt > latest ? h.updatedAt : latest), hotels[0].updatedAt)
    : null

  // Derive a source filename from importResult if available (set after an in-session import)
  const sourceFilename = importResult?.fileName ?? null

  async function doImport(file: File, mode: ImportMode) {
    if (!id) return
    setImporting(true)
    setError(null)
    try {
      const result = await hotelsApi.import(id, file, mode)
      setImportResult({ ...result, fileName: file.name })
      const updated = await hotelsApi.list(id)
      setHotels(updated)
      advanceTo(2)
    } catch {
      setError("Import failed. Check the file format and try again.")
    } finally {
      setImporting(false)
    }
  }

  function handleFile(file: File) {
    if (hasHotels) {
      // State B: show mode-selection modal before uploading
      setPendingUpload({ file })
    } else {
      // State A: import immediately
      doImport(file, "merge")
    }
  }

  async function handleModalConfirm(mode: ImportMode) {
    if (!pendingUpload) return
    const { file } = pendingUpload
    setPendingUpload(null)
    await doImport(file, mode)
  }

  function handleModalCancel() {
    setPendingUpload(null)
  }

  const existingCount = hotels.length
  const pendingFileName = pendingUpload?.file.name ?? ""

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Import hotel data</h2>
        <p>
          {hasHotels
            ? "Your hotel data is loaded. Proceed to the next step, or replace and update the data below."
            : "Upload your XLSX file to load hotel profiles into this project."}
        </p>
      </div>

      {error && <Alert type="error" message={error} />}

      {/* State B — summary card */}
      {hasHotels && !importing && (
        <div className="import-summary-card">
          <div className="import-summary-stat">
            <span className="import-summary-count">{existingCount}</span>
            <span className="import-summary-label">hotels loaded</span>
          </div>
          <div className="import-summary-meta">
            {sourceFilename && (
              <span className="import-summary-filename">{sourceFilename}</span>
            )}
            {latestUpdatedAt && (
              <span className="import-summary-updated">
                {sourceFilename ? " · " : ""}Last updated {formatDate(latestUpdatedAt)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Importing spinner */}
      {importing && (
        <div className="import-summary-card import-summary-card--loading">
          <p style={{ margin: 0, color: "#666" }}>Importing your hotels…</p>
        </div>
      )}

      {/* Dropzone — primary in State A, demoted in State B */}
      {!importing && (
        <>
          {hasHotels && (
            <p className="import-replace-heading">Replace or update hotel data</p>
          )}
          <ImportDropzone onFile={handleFile} disabled={importing} />
        </>
      )}

      {/* Post-import result (shown after an in-session upload) */}
      {importResult && (
        <Flex vertical gap={10}>
          <Alert
            type="success"
            message={`${importResult.imported} hotel${importResult.imported !== 1 ? "s" : ""} imported${importResult.skipped > 0 ? `, ${importResult.skipped} skipped` : ""}`}
          />
          {importResult.warnings.length > 0 && (
            <div className="import-warnings">
              <strong>Warnings ({importResult.warnings.length})</strong>
              <ul>
                {importResult.warnings.slice(0, 10).map((w, i) => <li key={i}>{w}</li>)}
                {importResult.warnings.length > 10 && (
                  <li>…and {importResult.warnings.length - 10} more</li>
                )}
              </ul>
            </div>
          )}
        </Flex>
      )}

      <WizardActionBar
        primaryLabel="Next: Select hotels →"
        onPrimary={() => navigate(`/projects/${id}/wizard/2`)}
        primaryDisabled={!hasHotels && !importResult}
        primaryTooltip="Upload hotel data to continue"
      />

      {/* Mode-selection modal — only shown in State B when a file is chosen */}
      <Modal
        open={!!pendingUpload}
        title="Update hotel data"
        onCancel={handleModalCancel}
        footer={[
          <button
            key="cancel"
            className="import-modal-btn import-modal-btn--secondary"
            onClick={handleModalCancel}
          >
            Cancel
          </button>,
          <button
            key="merge"
            className="import-modal-btn import-modal-btn--primary"
            onClick={() => handleModalConfirm("merge")}
          >
            Merge by Hotel Code
          </button>,
          <button
            key="replace"
            className="import-modal-btn import-modal-btn--danger"
            onClick={() => handleModalConfirm("replace")}
          >
            Replace all
          </button>,
        ]}
        width={480}
      >
        <div className="import-modal-body">
          <p className="import-modal-preview">
            You have <strong>{existingCount} hotels</strong> loaded.
            {pendingFileName && (
              <> The new file <strong>"{pendingFileName}"</strong> will be processed according to the option you choose below.</>
            )}
          </p>
          <div className="import-modal-options">
            <div className="import-modal-option">
              <strong>Merge by Hotel Code</strong>
              <p>Update existing hotels where Hotel Code matches, add new ones, and leave any non-matching hotels untouched.</p>
            </div>
            <div className="import-modal-option import-modal-option--danger">
              <strong>Replace all</strong>
              <p>Remove all {existingCount} existing hotels and load the new file from scratch.</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
