import { useState } from "react"
import { Button, Input, Flex, Select } from "@derbysoft/neat-design"
import type { ToneConfig } from "@hotel-copy/shared"
import { toneApi } from "../services/api"

interface Props {
  onSaved: (config: ToneConfig) => void
  onCancel: () => void
  existing?: ToneConfig
}

const LEVEL_OPTIONS = [
  { value: "CHAIN", label: "Chain" },
  { value: "BRAND", label: "Brand" },
]

export default function ToneConfigForm({ onSaved, onCancel, existing }: Props) {
  const [level, setLevel] = useState<"CHAIN" | "BRAND">(existing?.level ?? "CHAIN")
  const [entityName, setEntityName] = useState(existing?.entityName ?? "")
  const [tone, setTone] = useState(existing?.tone ?? "")
  const [copyStyle, setCopyStyle] = useState(existing?.copyStyle ?? "")
  const [prohibitedWords, setProhibitedWords] = useState(existing?.prohibitedWords?.join(", ") ?? "")
  const [mandatoryIncludes, setMandatoryIncludes] = useState(existing?.mandatoryIncludes?.join(", ") ?? "")
  const [notes, setNotes] = useState(existing?.notes ?? "")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function splitCsv(val: string): string[] {
    return val.split(",").map((s) => s.trim()).filter(Boolean)
  }

  async function handleSave() {
    if (!entityName.trim() || !tone.trim() || !copyStyle.trim()) {
      setError("Entity name, tone and copy style are required.")
      return
    }
    setSaving(true)
    setError(null)
    try {
      const body = {
        level,
        entityName: entityName.trim(),
        tone: tone.trim(),
        copyStyle: copyStyle.trim(),
        prohibitedWords: splitCsv(prohibitedWords),
        mandatoryIncludes: splitCsv(mandatoryIncludes),
        notes: notes.trim() || undefined,
      }
      let saved: ToneConfig
      if (existing) {
        saved = await toneApi.update(existing.id, body)
      } else {
        saved = await toneApi.create(body)
      }
      onSaved(saved)
    } catch {
      setError("Failed to save. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Flex vertical gap={16}>
      {error && <div className="error-text">{error}</div>}

      <Flex gap={16}>
        <Flex vertical gap={4} flex={1}>
          <label>Level</label>
          <Select
            value={level}
            onChange={(value) => setLevel(value as "CHAIN" | "BRAND")}
            options={LEVEL_OPTIONS}
            disabled={!!existing}
          />
        </Flex>
        <Flex vertical gap={4} flex={2}>
          <label>Entity name</label>
          <Input
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
            placeholder="e.g. KYORITSU MAINTENANCE"
            disabled={!!existing}
          />
        </Flex>
      </Flex>

      <Flex vertical gap={4}>
        <label>Tone</label>
        <Input
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          placeholder="e.g. warm, accessible, modern"
        />
      </Flex>

      <Flex vertical gap={4}>
        <label>Copy style</label>
        <Input
          value={copyStyle}
          onChange={(e) => setCopyStyle(e.target.value)}
          placeholder="e.g. benefit-led"
        />
      </Flex>

      <Flex vertical gap={4}>
        <label>Prohibited words <small>(comma separated)</small></label>
        <Input
          value={prohibitedWords}
          onChange={(e) => setProhibitedWords(e.target.value)}
          placeholder="e.g. cheap, discount"
        />
      </Flex>

      <Flex vertical gap={4}>
        <label>Must include <small>(comma separated)</small></label>
        <Input
          value={mandatoryIncludes}
          onChange={(e) => setMandatoryIncludes(e.target.value)}
          placeholder="e.g. loyalty, member rate"
        />
      </Flex>

      <Flex vertical gap={4}>
        <label>Notes</label>
        <Input.TextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Additional context for the AI…"
        />
      </Flex>

      <Flex gap={8}>
        <Button type="primary" onClick={handleSave} loading={saving}>
          {existing ? "Save changes" : "Add tone config"}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Flex>
    </Flex>
  )
}
