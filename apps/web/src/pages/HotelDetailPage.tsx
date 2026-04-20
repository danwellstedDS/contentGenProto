import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Input, Flex } from "@derbysoft/neat-design"
import { hotelsApi } from "../services/api"
import type { Hotel } from "@hotel-copy/shared"
import AppShell from "../components/AppShell"

function Field({
  label,
  value,
  onSave,
}: {
  label: string
  value: string | number | null | undefined
  onSave: (v: string) => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(String(value ?? ""))

  function commit() {
    setEditing(false)
    if (draft !== String(value ?? "")) {
      onSave(draft)
    }
  }

  if (editing) {
    return (
      <div className="hotel-field">
        <span className="hotel-field-label">{label}</span>
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onPressEnter={commit}
          autoFocus
          size="small"
        />
      </div>
    )
  }

  return (
    <div
      className="hotel-field"
      onClick={() => { setDraft(String(value ?? "")); setEditing(true) }}
      role="button"
      title="Click to edit"
    >
      <span className="hotel-field-label">{label}</span>
      <span className="hotel-field-value">{value ?? <em style={{ color: "#aaa" }}>—</em>}</span>
    </div>
  )
}

function ReadonlyLinkField({
  label,
  value,
  href,
}: {
  label: string
  value: string | null | undefined
  href?: string
}) {
  const navigate = useNavigate()
  return (
    <div className="hotel-field">
      <span className="hotel-field-label">{label}</span>
      {value ? (
        href ? (
          <button
            className="btn-ghost"
            style={{ padding: "0 4px", fontWeight: 500, textAlign: "left" }}
            onClick={() => navigate(href)}
          >
            {value}
          </button>
        ) : (
          <span className="hotel-field-value">{value}</span>
        )
      ) : (
        <span className="hotel-field-value"><em style={{ color: "#aaa" }}>Not set — import from XLSX to assign</em></span>
      )}
    </div>
  )
}

export default function HotelDetailPage() {
  const { hotelCode } = useParams<{ hotelCode: string }>()
  const navigate = useNavigate()
  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!hotelCode) return
    hotelsApi.get(hotelCode).then(setHotel).catch(() => setError("Hotel not found")).finally(() => setLoading(false))
  }, [hotelCode])

  async function patchField(field: keyof Hotel, value: string) {
    if (!hotelCode) return
    try {
      const updated = await hotelsApi.patch(hotelCode, { [field]: value || null })
      setHotel(updated)
    } catch {
      // silently ignore; user can retry
    }
  }

  if (loading) {
    return (
      <AppShell activeNav="hotels">
        <div className="page-content">
          <p style={{ color: "#888" }}>Loading…</p>
        </div>
      </AppShell>
    )
  }

  if (error || !hotel) {
    return (
      <AppShell activeNav="hotels">
        <div className="page-content">
          <p style={{ color: "#c00" }}>{error ?? "Hotel not found"}</p>
          <button className="btn-ghost" onClick={() => navigate("/hotels")}>← Back to hotels</button>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell activeNav="hotels">
      <div className="page-content">
        <div className="page-header">
          <div>
            <button
              className="btn-ghost"
              onClick={() => navigate("/hotels")}
              style={{ marginBottom: 8 }}
            >
              ← Hotels
            </button>
            <h1 className="page-title">{hotel.hotelName}</h1>
            <p className="page-subtitle">{hotel.hotelCode}{hotel.chainName ? ` · ${hotel.chainName}` : ""}</p>
          </div>
        </div>

        <div className="hotel-detail-grid">
          <section className="hotel-detail-section">
            <h3 className="hotel-detail-section-title">Basic info</h3>
            <Field label="Hotel name" value={hotel.hotelName} onSave={(v) => patchField("hotelName", v)} />
            <Field label="Hotel code" value={hotel.hotelCode} onSave={(v) => patchField("hotelCode", v)} />
            <ReadonlyLinkField
              label="Chain"
              value={hotel.chainName}
              href={hotel.chainId ? `/brands?chainId=${hotel.chainId}` : undefined}
            />
            <ReadonlyLinkField
              label="Brand"
              value={hotel.brandName}
              href={hotel.brandId ? `/brands/${hotel.brandId}` : undefined}
            />
            <Field label="Country" value={hotel.country} onSave={(v) => patchField("country", v)} />
            <Field label="City" value={hotel.city} onSave={(v) => patchField("city", v)} />
            <Field label="Star rating" value={hotel.starRating} onSave={(v) => patchField("starRating", v)} />
            <Field label="Room count" value={hotel.roomCount} onSave={(v) => patchField("roomCount", v)} />
            <Field label="Google Place ID" value={hotel.googlePlaceId} onSave={(v) => patchField("googlePlaceId", v)} />
          </section>

          <section className="hotel-detail-section">
            <h3 className="hotel-detail-section-title">Description</h3>
            <div className="hotel-field">
              <span className="hotel-field-label">Profile description</span>
              <textarea
                className="hotel-field-textarea"
                defaultValue={hotel.description ?? ""}
                rows={6}
                placeholder="No description yet…"
                onBlur={(e) => {
                  if (e.target.value !== (hotel.description ?? "")) {
                    patchField("description", e.target.value)
                  }
                }}
              />
            </div>
          </section>
        </div>

        <Flex gap={8} style={{ marginTop: 24 }}>
          <div className="hotel-detail-section" style={{ flex: 1 }}>
            <h3 className="hotel-detail-section-title">Categories</h3>
            {Object.entries(hotel.categories).length === 0 ? (
              <p style={{ color: "#aaa", fontSize: 13 }}>No categories data</p>
            ) : (
              <div className="hotel-categories-grid">
                {Object.entries(hotel.categories).map(([key, val]) => (
                  <div key={key} className={`hotel-category-tag ${val ? "active" : ""}`}>
                    {key}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Flex>
      </div>
    </AppShell>
  )
}
