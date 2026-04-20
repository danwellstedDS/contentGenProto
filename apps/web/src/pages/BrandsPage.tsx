import { useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { brandsApi, chainsApi } from "../services/api"
import type { Brand, Chain } from "@hotel-copy/shared"
import AppShell from "../components/AppShell"

type BrandRow = Brand & { hotelCount: number; chainName: string }
type ChainRow = Chain & { hotelCount: number; brandCount: number }

function VoiceBadge({ hasVoice }: { hasVoice: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 500,
        background: hasVoice ? "#e6f7f5" : "#fff3cd",
        color: hasVoice ? "#00736b" : "#856404",
        border: `1px solid ${hasVoice ? "#b3e8e3" : "#ffeaa7"}`,
      }}
    >
      {hasVoice ? "Configured" : "Needs voice"}
    </span>
  )
}

export default function BrandsPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [brands, setBrands] = useState<BrandRow[]>([])
  const [chains, setChains] = useState<ChainRow[]>([])
  const [loading, setLoading] = useState(true)

  const filterParam = searchParams.get("filter") // "needs-voice"
  const chainIdParam = searchParams.get("chainId")
  const [voiceFilter, setVoiceFilter] = useState<"all" | "needs" | "configured">(
    filterParam === "needs-voice" ? "needs" : "all"
  )
  const [selectedChainId, setSelectedChainId] = useState(chainIdParam ?? "")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    Promise.all([brandsApi.list(), chainsApi.list()]).then(([b, c]) => {
      setBrands(b)
      setChains(c)
      setLoading(false)
    })
  }, [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return brands.filter((b) => {
      const matchesSearch = !q || b.name.toLowerCase().includes(q) || b.chainName.toLowerCase().includes(q)
      const matchesChain = !selectedChainId || b.chainId === selectedChainId
      const hasVoice = !!(b.tone || b.copyStyle)
      const matchesVoice = voiceFilter === "all" || (voiceFilter === "needs" && !hasVoice) || (voiceFilter === "configured" && hasVoice)
      return matchesSearch && matchesChain && matchesVoice
    })
  }, [brands, searchQuery, selectedChainId, voiceFilter])

  const needsVoiceCount = brands.filter((b) => !(b.tone || b.copyStyle)).length

  function applyVoiceFilter(v: typeof voiceFilter) {
    setVoiceFilter(v)
    const p = new URLSearchParams(searchParams)
    if (v === "needs") p.set("filter", "needs-voice")
    else p.delete("filter")
    setSearchParams(p, { replace: true })
  }

  return (
    <AppShell activeNav="brands">
      <div className="page-content">
        <div className="page-header">
          <div>
            <h1 className="page-title">Brands</h1>
            <p className="page-subtitle">
              {loading ? "Loading…" : `${brands.length} brand${brands.length !== 1 ? "s" : ""} across ${chains.length} chain${chains.length !== 1 ? "s" : ""}`}
            </p>
          </div>
        </div>

        {!loading && needsVoiceCount > 0 && voiceFilter !== "needs" && (
          <div style={{
            background: "#fff3cd",
            border: "1px solid #ffeaa7",
            borderRadius: 8,
            padding: "12px 16px",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 14, color: "#856404" }}>
              <strong>{needsVoiceCount} brand{needsVoiceCount !== 1 ? "s" : ""}</strong> still need voice configuration.
            </span>
            <button className="btn-secondary" onClick={() => applyVoiceFilter("needs")} style={{ fontSize: 13 }}>
              Show needs voice →
            </button>
          </div>
        )}

        {!loading && (
          <>
            <div className="hotels-filters" style={{ marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <input
                className="hotels-search"
                type="search"
                placeholder="Search brands or chains…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {chains.length > 0 && (
                <select
                  className="hotels-brand-select"
                  value={selectedChainId}
                  onChange={(e) => setSelectedChainId(e.target.value)}
                >
                  <option value="">All chains</option>
                  {chains.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              )}
              <div style={{ display: "flex", gap: 4 }}>
                {(["all", "needs", "configured"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => applyVoiceFilter(v)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 4,
                      border: "1px solid #d0d5dd",
                      background: voiceFilter === v ? "#00b2a9" : "#fff",
                      color: voiceFilter === v ? "#fff" : "#344054",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    {v === "all" ? "All" : v === "needs" ? "Needs voice" : "Configured"}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="hotels-empty">No brands match your filters.</p>
            ) : (
              <div className="hotels-step-list">
                {filtered.map((brand) => {
                  const hasVoice = !!(brand.tone || brand.copyStyle)
                  return (
                    <div
                      key={brand.id}
                      className="hotel-row"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/brands/${brand.id}`)}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span className="hotel-row-name">{brand.name}</span>
                        <span className="hotel-row-meta">
                          {brand.chainName} · {brand.hotelCount} hotel{brand.hotelCount !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="hotel-row-right">
                        <VoiceBadge hasVoice={hasVoice} />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </AppShell>
  )
}
