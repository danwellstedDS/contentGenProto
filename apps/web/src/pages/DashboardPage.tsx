import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Tag } from "@derbysoft/neat-design"
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

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
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
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={4} className="data-table-empty">Loading…</td>
                </tr>
              )}

              {!loading && sorted.length === 0 && (
                <tr>
                  <td colSpan={4} className="data-table-empty">
                    No projects yet — create one to get started.
                  </td>
                </tr>
              )}

              {sorted.map((p) => (
                <tr key={p.id} onClick={() => openProject(p)}>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}
