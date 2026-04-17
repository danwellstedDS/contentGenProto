import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Input, Flex, Alert } from "@derbysoft/neat-design"
import { projectsApi } from "../services/api"
import { useWizardStore } from "../store/wizardStore"
import AppShell from "../components/AppShell"

export default function NewProjectPage() {
  const [name, setName] = useState("")
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const reset = useWizardStore((s) => s.reset)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    setError(null)
    setCreating(true)
    try {
      const project = await projectsApi.create(name.trim())
      reset()
      navigate(`/projects/${project.id}/wizard/1`)
    } catch {
      setError("Something went wrong. Please try again.")
      setCreating(false)
    }
  }

  return (
    <AppShell activeNav="home">
      <div className="page-body">
      <Flex vertical gap={24} className="page-container-sm">
        <Flex vertical gap={4}>
          <h1>New Project</h1>
          <p>Give your project a name to get started. You'll import hotels in the next step.</p>
        </Flex>

        {error && <Alert type="error" message={error} />}

        <form onSubmit={handleSubmit}>
          <Flex vertical gap={24}>
            <Flex vertical gap={4}>
              <label className="form-label">Project name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Kyoritsu Q2 2026"
              />
            </Flex>

            <Flex gap={8}>
              <Button
                htmlType="submit"
                type="primary"
                disabled={creating || !name.trim()}
                loading={creating}
              >
                {creating ? "Creating…" : "Create Project"}
              </Button>
              <Button onClick={() => navigate("/dashboard")}>Cancel</Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
      </div>
    </AppShell>
  )
}
