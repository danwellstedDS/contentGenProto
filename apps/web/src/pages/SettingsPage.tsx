import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Flex, Tag } from "@derbysoft/neat-design"
import type { Color } from "@derbysoft/neat-design/es/Tag/Tag"
import type { ToneConfig } from "@hotel-copy/shared"
import { toneApi } from "../services/api"
import ToneConfigForm from "../components/ToneConfigForm"

export default function SettingsPage() {
  const navigate = useNavigate()
  const [configs, setConfigs] = useState<ToneConfig[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<ToneConfig | null>(null)

  useEffect(() => {
    toneApi.list().then(setConfigs).finally(() => setLoading(false))
  }, [])

  function handleSaved(saved: ToneConfig) {
    setConfigs((prev) => {
      const idx = prev.findIndex((c) => c.id === saved.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = saved
        return next
      }
      return [...prev, saved]
    })
    setShowForm(false)
    setEditing(null)
  }

  async function handleDelete(cfg: ToneConfig) {
    await toneApi.delete(cfg.id)
    setConfigs((prev) => prev.filter((c) => c.id !== cfg.id))
  }

  const levelColor = (level: string): Color => level === "CHAIN" ? "blue" : "neutral"

  return (
    <Flex vertical gap={24} className="page-container">
      <Flex justify="space-between" align="center">
        <h1>Settings</h1>
        <Button type="tertiary" onClick={() => navigate("/dashboard")}>← Dashboard</Button>
      </Flex>

      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <h2>Global tone configurations</h2>
          {!showForm && !editing && (
            <Button type="secondary" onClick={() => setShowForm(true)}>+ Add tone config</Button>
          )}
        </Flex>

        <p>Tone configs apply globally across all projects and are matched to hotels by chain/brand name.</p>

        {loading && <p>Loading…</p>}

        {(showForm || editing) && (
          <ToneConfigForm
            existing={editing ?? undefined}
            onSaved={handleSaved}
            onCancel={() => { setShowForm(false); setEditing(null) }}
          />
        )}

        <Flex vertical gap={8}>
          {configs.length === 0 && !loading && (
            <p>No tone configs yet. Add one to guide the AI's copywriting style.</p>
          )}
          {configs.map((cfg) => (
            <div key={cfg.id} className="tone-config-card">
              <Flex justify="space-between" align="flex-start" gap={16}>
                <Flex vertical gap={4}>
                  <Flex align="center" gap={8}>
                    <Tag color={levelColor(cfg.level)}>{cfg.level}</Tag>
                    <strong>{cfg.entityName}</strong>
                  </Flex>
                  <small>Tone: {cfg.tone}</small>
                  <small>Style: {cfg.copyStyle}</small>
                  {cfg.prohibitedWords.length > 0 && (
                    <small>Prohibited: {cfg.prohibitedWords.join(", ")}</small>
                  )}
                  {cfg.notes && <small>Notes: {cfg.notes}</small>}
                </Flex>
                <Flex gap={8}>
                  <Button type="tertiary" onClick={() => { setEditing(cfg); setShowForm(false) }}>Edit</Button>
                  <Button type="tertiary" onClick={() => handleDelete(cfg)}>Delete</Button>
                </Flex>
              </Flex>
            </div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
