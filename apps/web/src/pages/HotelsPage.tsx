import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Modal } from "antd"
import { Alert, Flex } from "@derbysoft/neat-design"
import { hotelsApi } from "../services/api"
import type { Hotel } from "@hotel-copy/shared"
import AppShell from "../components/AppShell"
import ImportDropzone from "../components/ImportDropzone"

export default function HotelsPage() {
  const navigate = useNavigate()
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [chainFilter, setChainFilter] = useState("")
  const [importModalOpen, setImportModalOpen] = useState(false)
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState<{ imported: number; skipped: number; warnings: string[] } | null>(null)
  const [importError, setImportError] = useState<string | null>(null)
  const [pendingFile, setPendingFile] = useState<File | null>(null)

  useEffect(() => {
    hotelsApi.list().then((data) => {
      setHotels(data)
      setLoading(false)
    })
  }, [])

  const allChains = useMemo(() => {
    const seen = new Set<string>()
    hotels.forEach((h) => { if (h.chain) seen.add(h.chain) })
    return Array.from(seen).sort()
  }, [hotels])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return hotels.filter((h) => {
      const matchesSearch = !q
        || h.hotelName.toLowerCase().includes(q)
        || h.hotelCode.toLowerCase().includes(q)
      const matchesChain = !chainFilter || h.chain === chainFilter
      return matchesSearch && matchesChain
    })
  }, [hotels, searchQuery, chainFilter])

  async function doImport(file: File, mode: "replace" | "merge") {
    setImporting(true)
    setImportError(null)
    setImportResult(null)
    try {
      const result = await hotelsApi.import(file, mode)
      setImportResult(result)
      const updated = await hotelsApi.list()
      setHotels(updated)
    } catch {
      setImportError("Import failed. Check the file format and try again.")
    } finally {
      setImporting(false)
      setPendingFile(null)
    }
  }

  function handleFile(file: File) {
    if (hotels.length > 0) {
      setPendingFile(file)
    } else {
      doImport(file, "merge")
    }
  }

  function closeImportModal() {
    setImportModalOpen(false)
    setImportResult(null)
    setImportError(null)
    setPendingFile(null)
  }

  return (
    <AppShell activeNav="hotels">
      <div className="page-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Hotels</h1>
            <p className="page-subtitle">
              {loading ? "Loading…" : `${hotels.length} hotel${hotels.length !== 1 ? "s" : ""} in library`}
            </p>
          </div>
          <button className="btn-primary" onClick={() => setImportModalOpen(true)}>
            Import hotels
          </button>
        </div>

        {!loading && (
          <>
            <div className="hotels-filters" style={{ marginBottom: 16 }}>
              <input
                className="hotels-search"
                type="search"
                placeholder="Search by name or code…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search hotels"
              />
              {allChains.length > 1 && (
                <select
                  className="hotels-brand-select"
                  value={chainFilter}
                  onChange={(e) => setChainFilter(e.target.value)}
                  aria-label="Filter by chain"
                >
                  <option value="">All chains</option>
                  {allChains.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              )}
            </div>

            {hotels.length === 0 ? (
              <div className="hotels-empty" style={{ textAlign: "center", padding: "64px 0" }}>
                <p style={{ color: "#888", marginBottom: 16 }}>No hotels in library yet.</p>
                <button className="btn-primary" onClick={() => setImportModalOpen(true)}>
                  Import your first hotels
                </button>
              </div>
            ) : filtered.length === 0 ? (
              <p className="hotels-empty">No hotels match your filters.</p>
            ) : (
              <div className="hotels-step-list">
                {filtered.map((hotel) => (
                  <div
                    key={hotel.hotelCode}
                    className="hotel-row"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/hotels/${hotel.hotelCode}`)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span className="hotel-row-name">{hotel.hotelName}</span>
                      <span className="hotel-row-meta">
                        {hotel.hotelCode}
                        {hotel.city && hotel.country ? ` · ${hotel.city}, ${hotel.country}` : ""}
                      </span>
                    </div>
                    <div className="hotel-row-right">
                      {hotel.chain && (
                        <span className="hotel-row-brand">{hotel.chain}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Import modal */}
      <Modal
        open={importModalOpen}
        title="Import hotels"
        onCancel={closeImportModal}
        footer={null}
        width={520}
      >
        <Flex vertical gap={16} style={{ padding: "8px 0" }}>
          {importError && <Alert type="error" message={importError} />}

          {importResult ? (
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
              <button className="btn-primary" onClick={closeImportModal}>Done</button>
            </Flex>
          ) : importing ? (
            <p style={{ color: "#666" }}>Importing hotels…</p>
          ) : pendingFile ? (
            <Flex vertical gap={12}>
              <p style={{ margin: 0 }}>
                You have <strong>{hotels.length} hotels</strong> in the library.
                File <strong>"{pendingFile.name}"</strong> will be processed as:
              </p>
              <Flex gap={8}>
                <button
                  className="btn-secondary"
                  onClick={() => doImport(pendingFile, "merge")}
                >
                  Merge by Hotel Code
                </button>
                <button
                  className="btn-danger"
                  onClick={() => doImport(pendingFile, "replace")}
                >
                  Replace all
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => setPendingFile(null)}
                >
                  Cancel
                </button>
              </Flex>
              <p className="hotels-filter-status" style={{ margin: 0 }}>
                <strong>Merge:</strong> update existing, add new, leave non-matching unchanged.
                <br />
                <strong>Replace:</strong> soft-delete all {hotels.length} existing hotels and load fresh from this file.
              </p>
            </Flex>
          ) : (
            <ImportDropzone onFile={handleFile} disabled={importing} />
          )}
        </Flex>
      </Modal>
    </AppShell>
  )
}
