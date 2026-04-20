import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { hotelsApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"

export default function Step2Hotels() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const {
    hotels, selectedHotelCodes, setHotels, toggleHotel,
    selectCodes, deselectCodes, advanceTo,
  } = useWizardStore()

  const [searchQuery, setSearchQuery] = useState("")
  const [brandFilter, setBrandFilter] = useState("")

  useEffect(() => {
    if (hotels.length === 0 && id) {
      hotelsApi.list(id).then(setHotels)
    }
  }, [id])

  // Unique chains for the brand filter dropdown
  const allBrands = useMemo(() => {
    const seen = new Set<string>()
    hotels.forEach((h) => { if (h.chain) seen.add(h.chain) })
    return Array.from(seen).sort()
  }, [hotels])

  // Hotels visible after applying search + brand filter
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return hotels.filter((h) => {
      const matchesSearch = !q
        || h.hotelName.toLowerCase().includes(q)
        || h.hotelCode.toLowerCase().includes(q)
      const matchesBrand = !brandFilter || h.chain === brandFilter
      return matchesSearch && matchesBrand
    })
  }, [hotels, searchQuery, brandFilter])

  const selectedCount = selectedHotelCodes.size
  const canContinue = selectedCount > 0

  // "1 brand · Name" or "N brands" summary shown in the action bar
  const brandSummary = useMemo(() => {
    const selectedBrands = new Set<string>()
    hotels.forEach((h) => {
      if (selectedHotelCodes.has(h.hotelCode) && h.chain) selectedBrands.add(h.chain)
    })
    if (selectedBrands.size === 0) return null
    if (selectedBrands.size === 1) return `1 brand · ${Array.from(selectedBrands)[0]}`
    return `${selectedBrands.size} brands`
  }, [hotels, selectedHotelCodes])

  function handleSelectAll() {
    selectCodes(filtered.map((h) => h.hotelCode))
  }

  function handleDeselectAll() {
    deselectCodes(filtered.map((h) => h.hotelCode))
  }

  function handleContinue() {
    if (!canContinue) return
    advanceTo(3)
    navigate(`/projects/${id}/wizard/3`)
  }

  if (hotels.length === 0) {
    return (
      <div className="wizard-step">
        <p style={{ color: "#888" }}>Loading hotels…</p>
      </div>
    )
  }

  return (
    <div className="hotels-step">
      {/* ── Header ── */}
      <div className="hotels-step-header">
        <div className="step-heading">
          <h2>Select hotels</h2>
          <p>Choose which hotels to include in this generation.</p>
        </div>

        <div className="hotels-filters">
          <input
            className="hotels-search"
            type="search"
            placeholder="Search by name or code…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search hotels"
          />
          {allBrands.length > 1 && (
            <select
              className="hotels-brand-select"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              aria-label="Filter by brand"
            >
              <option value="">All brands</option>
              {allBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          )}
        </div>

        {(searchQuery || brandFilter) && (
          <p className="hotels-filter-status">
            Showing {filtered.length} of {hotels.length} hotels
          </p>
        )}
      </div>

      {/* ── Hotel list ── */}
      <div className="hotels-step-list">
        {filtered.length === 0 ? (
          <p className="hotels-empty">No hotels match your filters.</p>
        ) : (
          filtered.map((hotel) => {
            const isSelected = selectedHotelCodes.has(hotel.hotelCode)
            return (
              <div
                key={hotel.hotelCode}
                className={`hotel-row ${isSelected ? "selected" : "deselected"}`}
                onClick={() => toggleHotel(hotel.hotelCode)}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span className="hotel-row-name">{hotel.hotelName}</span>
                  <span className="hotel-row-meta">
                    {hotel.hotelCode} · {hotel.city}, {hotel.country}
                  </span>
                </div>
                <div className="hotel-row-right">
                  {hotel.chain && (
                    <span className="hotel-row-brand">{hotel.chain}</span>
                  )}
                  <div
                    style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: isSelected ? "#00b2a9" : "#fff",
                      border: `2px solid ${isSelected ? "#00b2a9" : "#d0d5dd"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "all 0.15s",
                    }}
                  >
                    {isSelected && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* ── Sticky action bar ── */}
      <div
        className="hotels-action-bar"
        role="region"
        aria-label="Hotel selection actions"
      >
        <button
          className="hotels-action-back"
          onClick={() => navigate(`/projects/${id}/wizard/1`)}
        >
          ← Back
        </button>

        <div className="hotels-action-summary" aria-live="polite">
          {canContinue ? (
            <>
              <span className="hotels-action-count">
                {selectedCount} of {hotels.length} selected
              </span>
              {brandSummary && (
                <span className="hotels-action-brands">{brandSummary}</span>
              )}
            </>
          ) : (
            <span className="hotels-action-empty">
              Select at least one hotel to continue.
            </span>
          )}
        </div>

        <div className="hotels-action-spacer" />

        <button
          className="hotels-action-text-btn"
          onClick={handleSelectAll}
        >
          Select all
        </button>
        <button
          className="hotels-action-text-btn"
          onClick={handleDeselectAll}
        >
          Deselect all
        </button>

        <button
          className={`hotels-action-continue${!canContinue ? " hotels-action-continue--disabled" : ""}`}
          onClick={handleContinue}
          disabled={!canContinue}
          aria-disabled={!canContinue}
          title={!canContinue ? "Select at least one hotel to continue" : undefined}
        >
          Continue to review →
        </button>
      </div>
    </div>
  )
}
