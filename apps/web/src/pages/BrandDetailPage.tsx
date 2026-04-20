import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { brandsApi, chainsApi } from "../services/api"
import type { Brand, Chain } from "@hotel-copy/shared"
import AppShell from "../components/AppShell"

type BrandDetail = Brand & {
  chain: Chain | null
  hotelCount: number
  resolved: {
    tone: string | null
    prohibitedWords: string[]
    mandatoryIncludes: string[]
    copyStyle: string | null
    notes: string | null
  }
  sources: Record<string, "brand" | "chain" | "none">
}

function SourceBadge({ source }: { source: "brand" | "chain" | "none" }) {
  if (source === "none") return null
  return (
    <span style={{
      fontSize: 10, padding: "1px 6px", borderRadius: 3,
      background: source === "brand" ? "#e8f4fd" : "#f0f0f0",
      color: source === "brand" ? "#0066cc" : "#666",
      border: `1px solid ${source === "brand" ? "#b3d9f5" : "#d0d5dd"}`,
      marginLeft: 6,
    }}>
      {source === "brand" ? "brand" : "from chain"}
    </span>
  )
}

function ChipInput({
  label,
  values,
  onChange,
}: {
  label: string
  values: string[]
  onChange: (v: string[]) => void
}) {
  const [input, setInput] = useState("")

  function addChip(raw: string) {
    const trimmed = raw.trim()
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed])
    }
    setInput("")
  }

  function removeChip(val: string) {
    onChange(values.filter((v) => v !== val))
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
        {values.map((v) => (
          <span key={v} style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            background: "#f5f5f5", border: "1px solid #d0d5dd",
            borderRadius: 4, padding: "2px 8px", fontSize: 13,
          }}>
            {v}
            <button
              onClick={() => removeChip(v)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#888", padding: 0, fontSize: 14, lineHeight: 1 }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            addChip(input)
          }
        }}
        onBlur={() => { if (input.trim()) addChip(input) }}
        placeholder="Type and press Enter to add…"
        style={{
          width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd",
          borderRadius: 6, fontSize: 14, boxSizing: "border-box",
        }}
      />
    </div>
  )
}

function ToneFields({
  brand,
  onSaved,
  isChainView = false,
}: {
  brand: BrandDetail
  onSaved: (updated: Brand) => void
  isChainView?: boolean
}) {
  const [tone, setTone] = useState(brand.tone ?? "")
  const [copyStyle, setCopyStyle] = useState(brand.copyStyle ?? "")
  const [prohibitedWords, setProhibitedWords] = useState(brand.prohibitedWords)
  const [mandatoryIncludes, setMandatoryIncludes] = useState(brand.mandatoryIncludes)
  const [notes, setNotes] = useState(brand.notes ?? "")
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function save() {
    setSaving(true)
    try {
      const updated = await brandsApi.patch(brand.id, {
        tone: tone || null,
        copyStyle: copyStyle || null,
        prohibitedWords,
        mandatoryIncludes,
        notes: notes || null,
      })
      onSaved(updated)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>
          Tone descriptor
        </label>
        <input
          type="text"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          placeholder={isChainView ? "e.g. warm, accessible, modern" : "e.g. refined, spa-focused, tranquil"}
          style={{
            width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd",
            borderRadius: 6, fontSize: 14, boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>
          Copy style
        </label>
        <input
          type="text"
          value={copyStyle}
          onChange={(e) => setCopyStyle(e.target.value)}
          placeholder="e.g. benefit-led, evocative, direct"
          style={{
            width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd",
            borderRadius: 6, fontSize: 14, boxSizing: "border-box",
          }}
        />
      </div>

      <ChipInput label="Prohibited words" values={prohibitedWords} onChange={setProhibitedWords} />
      <ChipInput label="Must include" values={mandatoryIncludes} onChange={setMandatoryIncludes} />

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>
          Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Any additional voice guidance…"
          style={{
            width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd",
            borderRadius: 6, fontSize: 14, resize: "vertical", boxSizing: "border-box",
          }}
        />
      </div>

      <button className="btn-primary" onClick={save} disabled={saving}>
        {saving ? "Saving…" : saved ? "Saved!" : "Save voice"}
      </button>
    </div>
  )
}

export default function BrandDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [brand, setBrand] = useState<BrandDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [tab, setTab] = useState<"brand" | "chain">("brand")

  // Chain editing
  const [chainTone, setChainTone] = useState("")
  const [chainCopyStyle, setChainCopyStyle] = useState("")
  const [chainProhibitedWords, setChainProhibitedWords] = useState<string[]>([])
  const [chainMandatoryIncludes, setChainMandatoryIncludes] = useState<string[]>([])
  const [chainNotes, setChainNotes] = useState("")
  const [chainSaving, setChainSaving] = useState(false)
  const [chainSaved, setChainSaved] = useState(false)

  useEffect(() => {
    if (!id) return
    brandsApi.get(id)
      .then((data) => {
        setBrand(data)
        if (data.chain) {
          setChainTone(data.chain.tone ?? "")
          setChainCopyStyle(data.chain.copyStyle ?? "")
          setChainProhibitedWords(data.chain.prohibitedWords)
          setChainMandatoryIncludes(data.chain.mandatoryIncludes)
          setChainNotes(data.chain.notes ?? "")
        }
        setLoading(false)
      })
      .catch(() => { setError("Brand not found"); setLoading(false) })
  }, [id])

  async function saveChain() {
    if (!brand?.chain) return
    setChainSaving(true)
    try {
      const updated = await chainsApi.patch(brand.chain.id, {
        tone: chainTone || null,
        copyStyle: chainCopyStyle || null,
        prohibitedWords: chainProhibitedWords,
        mandatoryIncludes: chainMandatoryIncludes,
        notes: chainNotes || null,
      })
      setBrand((prev) => prev ? { ...prev, chain: updated } : prev)
      setChainSaved(true)
      setTimeout(() => setChainSaved(false), 2000)
    } finally {
      setChainSaving(false)
    }
  }

  async function generatePreview() {
    if (!id) return
    setPreviewLoading(true)
    setPreview(null)
    try {
      const result = await brandsApi.preview(id)
      setPreview(result.preview)
    } catch {
      setPreview("Preview failed — please try again.")
    } finally {
      setPreviewLoading(false)
    }
  }

  if (loading) {
    return (
      <AppShell activeNav="brands">
        <div className="page-content"><p style={{ color: "#888" }}>Loading…</p></div>
      </AppShell>
    )
  }

  if (error || !brand) {
    return (
      <AppShell activeNav="brands">
        <div className="page-content">
          <p style={{ color: "#c00" }}>{error ?? "Brand not found"}</p>
          <button className="btn-ghost" onClick={() => navigate("/brands")}>← Back to brands</button>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell activeNav="brands">
      <div className="page-content">
        <div className="page-header">
          <div>
            <button className="btn-ghost" onClick={() => navigate("/brands")} style={{ marginBottom: 8 }}>
              ← Brands
            </button>
            <h1 className="page-title">{brand.name}</h1>
            <p className="page-subtitle">
              {brand.chain?.name ?? "No chain"} · {brand.hotelCount} hotel{brand.hotelCount !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          {/* Left: tone editing tabs */}
          <div>
            {/* Tab switcher */}
            <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: "2px solid #eee" }}>
              {(["brand", "chain"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    padding: "8px 20px", border: "none", background: "none",
                    borderBottom: tab === t ? "2px solid #00b2a9" : "2px solid transparent",
                    color: tab === t ? "#00b2a9" : "#666", cursor: "pointer",
                    fontWeight: tab === t ? 600 : 400, fontSize: 14, marginBottom: -2,
                  }}
                >
                  {t === "brand" ? `Brand: ${brand.name}` : `Chain: ${brand.chain?.name ?? "N/A"}`}
                </button>
              ))}
            </div>

            {tab === "brand" ? (
              <ToneFields brand={brand} onSaved={(updated) => setBrand((prev) => prev ? { ...prev, ...updated } : prev)} />
            ) : (
              <div>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
                  Chain-level tone acts as the default for all brands in <strong>{brand.chain?.name}</strong>.
                  Brand fields override chain fields wholesale when non-empty.
                </p>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>Tone descriptor</label>
                  <input type="text" value={chainTone} onChange={(e) => setChainTone(e.target.value)} placeholder="e.g. warm, accessible, modern"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd", borderRadius: 6, fontSize: 14, boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>Copy style</label>
                  <input type="text" value={chainCopyStyle} onChange={(e) => setChainCopyStyle(e.target.value)} placeholder="e.g. benefit-led"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd", borderRadius: 6, fontSize: 14, boxSizing: "border-box" }} />
                </div>
                <ChipInput label="Prohibited words" values={chainProhibitedWords} onChange={setChainProhibitedWords} />
                <ChipInput label="Must include" values={chainMandatoryIncludes} onChange={setChainMandatoryIncludes} />
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#344054", marginBottom: 6 }}>Notes</label>
                  <textarea value={chainNotes} onChange={(e) => setChainNotes(e.target.value)} rows={3} placeholder="Any additional voice guidance…"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #d0d5dd", borderRadius: 6, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button className="btn-primary" onClick={saveChain} disabled={chainSaving}>
                  {chainSaving ? "Saving…" : chainSaved ? "Saved!" : "Save chain voice"}
                </button>
              </div>
            )}
          </div>

          {/* Right: resolved tone + preview */}
          <div>
            <div style={{ background: "#f9fafb", border: "1px solid #eee", borderRadius: 8, padding: 20, marginBottom: 20 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600, color: "#344054" }}>
                Resolved voice (used at generation time)
              </h3>
              <p style={{ fontSize: 12, color: "#888", margin: "0 0 16px" }}>
                Brand fields override chain. Array fields (prohibited words, must include) replace the chain's list wholesale.
              </p>
              {[
                { key: "tone", label: "Tone" },
                { key: "copyStyle", label: "Copy style" },
              ].map(({ key, label }) => (
                <div key={key} style={{ marginBottom: 10, fontSize: 14 }}>
                  <span style={{ fontWeight: 600, color: "#344054" }}>{label}: </span>
                  <span style={{ color: brand.resolved[key as keyof typeof brand.resolved] ? "#1d2939" : "#aaa" }}>
                    {brand.resolved[key as keyof typeof brand.resolved] as string || "—"}
                  </span>
                  <SourceBadge source={brand.sources[key] ?? "none"} />
                </div>
              ))}
              {[
                { key: "prohibitedWords", label: "Prohibited words" },
                { key: "mandatoryIncludes", label: "Must include" },
              ].map(({ key, label }) => {
                const arr = (brand.resolved[key as keyof typeof brand.resolved] as string[]) ?? []
                return (
                  <div key={key} style={{ marginBottom: 10, fontSize: 14 }}>
                    <span style={{ fontWeight: 600, color: "#344054" }}>{label}: </span>
                    <span style={{ color: arr.length > 0 ? "#1d2939" : "#aaa" }}>
                      {arr.length > 0 ? arr.join(", ") : "—"}
                    </span>
                    <SourceBadge source={brand.sources[key] ?? "none"} />
                  </div>
                )
              })}
            </div>

            <div style={{ background: "#f0faf9", border: "1px solid #b3e8e3", borderRadius: 8, padding: 20 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600, color: "#00736b" }}>
                See this voice in action
              </h3>
              <p style={{ fontSize: 13, color: "#666", margin: "0 0 12px" }}>
                Generate a sample headline using the resolved tone for a generic {brand.name} property.
              </p>
              <button className="btn-secondary" onClick={generatePreview} disabled={previewLoading}>
                {previewLoading ? "Generating…" : "Generate preview headline"}
              </button>
              {preview && (
                <div style={{
                  marginTop: 12, padding: "12px 16px",
                  background: "#fff", borderRadius: 6, border: "1px solid #b3e8e3",
                  fontSize: 15, fontWeight: 500, color: "#1d2939",
                }}>
                  {preview}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
