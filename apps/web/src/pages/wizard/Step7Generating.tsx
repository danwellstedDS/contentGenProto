import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Alert } from "@derbysoft/neat-design"
import { generationApi } from "../../services/api"
import { useWizardStore } from "../../store/wizardStore"

const TASKS = [
  "Reading hotel profiles",
  "Applying hotel tone limits",
  "Checking character limits",
  "Close model consistency check",
  "Policy compliance style",
  "Translation and cultural fit check",
  "Applying your campaign goal",
]

export default function Step7Generating() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { generationId, generationStatus, setGenerationStatus, setAssets, advanceTo } = useWizardStore()
  const [visibleCount, setVisibleCount] = useState(0)
  const [doneCount, setDoneCount] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const taskTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Reveal tasks with staggered animation
  useEffect(() => {
    taskTimerRef.current = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= TASKS.length) {
          clearInterval(taskTimerRef.current!)
          return c
        }
        return c + 1
      })
    }, 600)
    return () => {
      if (taskTimerRef.current) clearInterval(taskTimerRef.current)
    }
  }, [])

  // Poll generation status
  useEffect(() => {
    if (!generationId || !id) return

    pollRef.current = setInterval(async () => {
      try {
        const gen = await generationApi.status(id, generationId)
        setGenerationStatus(gen.status as "PENDING" | "RUNNING" | "COMPLETE" | "FAILED")

        if (gen.status === "RUNNING" || gen.status === "COMPLETE") {
          setDoneCount(Math.min(doneCount + 2, TASKS.length))
        }

        if (gen.status === "COMPLETE") {
          clearInterval(pollRef.current!)
          setDoneCount(TASKS.length)
          const assets = await generationApi.assets(id, generationId)
          setAssets(assets)
          setTimeout(() => {
            advanceTo(8)
            navigate(`/projects/${id}/wizard/8`)
          }, 800)
        } else if (gen.status === "FAILED") {
          clearInterval(pollRef.current!)
          setError(`Generation failed: ${gen.errorMessage ?? "unknown error"}`)
        }
      } catch {
        // ignore transient polling errors
      }
    }, 3000)

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [generationId, id])

  return (
    <div className="wizard-step">
      <div className="step-heading">
        <h2>Generating your content…</h2>
        <p>
          We are generating content for all selected hotels and languages based on your campaign.
          We'll use your hotel-specific profile data for every hotel, so the content is accurate and on-brand.
        </p>
      </div>

      {error && (
        <>
          <Alert type="error" message={error} />
          <div className="step-nav">
            <Button onClick={() => navigate(`/projects/${id}/wizard/5`)}>← Back</Button>
            <span />
          </div>
        </>
      )}

      {!error && (
        <div className="generating-checklist">
          {TASKS.map((task, i) => (
            <div
              key={task}
              className={`generating-task${i < visibleCount ? " visible" : ""}`}
            >
              <div className={`generating-task-icon${i < doneCount ? " done" : " pending"}`}>
                {i < doneCount ? "✓" : "○"}
              </div>
              {task}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
