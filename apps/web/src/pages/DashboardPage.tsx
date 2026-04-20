import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Tag } from "@derbysoft/neat-design"
import { Modal } from "antd"
import type { Color } from "@derbysoft/neat-design/es/Tag/Tag"
import type { Project } from "@hotel-copy/shared"
import { projectsApi } from "../services/api"
import AppShell from "../components/AppShell"

const STATUS_COLOR: Record<string, Color> = {
  DRAFT: "neutral",
  GENERATING: "amber",
  IN_REVIEW: "blue",
  COMPLETE: "green",
}

const STATUS_LABEL: Record<string, string> = {
  DRAFT: "Draft",
  GENERATING: "Generating…",
  IN_REVIEW: "In review",
  COMPLETE: "Complete",
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function startStep(status: string): number {
  switch (status) {
    case "GENERATING": return 7
    case "IN_REVIEW":  return 8
    case "COMPLETE":   return 10
    default:           return 1
  }
}

function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H2.5C2.22386 4 2 3.77614 2 3.5ZM3 5.5C3 5.22386 3.22386 5 3.5 5H11.5C11.7761 5 12 5.22386 12 5.5V12.5C12 13.3284 11.3284 14 10.5 14H4.5C3.67157 14 3 13.3284 3 12.5V5.5ZM4 6V12.5C4 12.7761 4.22386 13 4.5 13H10.5C10.7761 13 11 12.7761 11 12.5V6H4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
    </svg>
  )
}

interface ToastState {
  project: Project
  timerId: ReturnType<typeof setTimeout>
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null)
  const [removingIds, setRemovingIds] = useState<Set<string>>(new Set())
  const [toast, setToast] = useState<ToastState | null>(null)
  const deleteBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map())
  const navigate = useNavigate()

  useEffect(() => {
    projectsApi.list().then(setProjects).finally(() => setLoading(false))
  }, [])

  function openProject(project: Project) {
    navigate(`/projects/${project.id}/wizard/${startStep(project.status)}`)
  }

  function newProject() {
    navigate("/projects/new")
  }

  function handleDeleteClick(e: React.MouseEvent, project: Project) {
    e.stopPropagation()
    setDeleteTarget(project)
  }

  async function confirmDelete() {
    if (!deleteTarget) return
    const target = deleteTarget
    setDeleteTarget(null)

    // Animate the row out
    setRemovingIds((prev) => new Set(prev).add(target.id))
    await projectsApi.delete(target.id)

    setTimeout(() => {
      setProjects((prev) => prev.filter((p) => p.id !== target.id))
      setRemovingIds((prev) => {
        const next = new Set(prev)
        next.delete(target.id)
        return next
      })

      // Clear any existing toast
      if (toast) clearTimeout(toast.timerId)

      const timerId = setTimeout(() => setToast(null), 5000)
      setToast({ project: target, timerId })
    }, 280)
  }

  async function handleUndo() {
    if (!toast) return
    const { project, timerId } = toast
    clearTimeout(timerId)
    setToast(null)
    await projectsApi.restore(project.id)
    setProjects((prev) => [project, ...prev].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ))
  }

  function handleModalClose() {
    const id = deleteTarget?.id
    setDeleteTarget(null)
    if (id) {
      setTimeout(() => deleteBtnRefs.current.get(id)?.focus(), 0)
    }
  }

  const sorted = [...projects].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  )

  return (
    <AppShell activeNav="home">
      <div className="page-body">
        <div className="data-table-wrap">
          <div className="data-table-toolbar">
            <span className="data-table-toolbar-title">
              Projects
              {!loading && (
                <span className="data-table-count">{sorted.length}</span>
              )}
            </span>
            <Button type="primary" onClick={newProject}>+ New project</Button>
          </div>

          <table className="project-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Campaign</th>
                <th>Status</th>
                <th>Updated</th>
                <th className="pt-actions-th" aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5} className="data-table-empty">Loading…</td>
                </tr>
              )}

              {!loading && sorted.length === 0 && (
                <tr>
                  <td colSpan={5} className="data-table-empty">
                    No projects yet — create one to get started.
                  </td>
                </tr>
              )}

              {sorted.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => openProject(p)}
                  className={removingIds.has(p.id) ? "pt-row-removing" : undefined}
                >
                  <td>
                    <div className="pt-name">
                      {p.name}
                      {p.versionNumber > 1 && <Tag color="neutral">v{p.versionNumber}</Tag>}
                    </div>
                    {p.parentProjectId && (
                      <div className="pt-sub">Fork</div>
                    )}
                  </td>
                  <td>
                    {p.campaignType
                      ? p.campaignType
                      : <span className="pt-empty">—</span>}
                  </td>
                  <td>
                    <Tag color={STATUS_COLOR[p.status] ?? "neutral"}>
                      {STATUS_LABEL[p.status] ?? p.status}
                    </Tag>
                  </td>
                  <td>{formatDate(p.updatedAt)}</td>
                  <td className="pt-actions-td" onClick={(e) => e.stopPropagation()}>
                    <button
                      ref={(el) => {
                        if (el) deleteBtnRefs.current.set(p.id, el)
                        else deleteBtnRefs.current.delete(p.id)
                      }}
                      className="pt-delete-btn"
                      aria-label={`Delete ${p.name}`}
                      onClick={(e) => handleDeleteClick(e, p)}
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation modal */}
      <Modal
        open={!!deleteTarget}
        title={`Delete "${deleteTarget?.name}"?`}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Cancel
          </Button>,
          <button key="delete" className="pt-delete-confirm-btn" onClick={confirmDelete}>
            Delete
          </button>,
        ]}
        width={400}
      >
        <p className="pt-modal-body">
          This project will be moved to trash. You can restore it within 90 days.
        </p>
      </Modal>

      {/* Undo toast */}
      {toast && (
        <div className="pt-toast" role="status" aria-live="polite">
          <span className="pt-toast-msg">"{toast.project.name}" moved to trash</span>
          <button className="pt-toast-undo" onClick={handleUndo}>Undo</button>
        </div>
      )}
    </AppShell>
  )
}
