import { useNavigate } from "react-router-dom"
import { Button, Flex } from "@derbysoft/neat-design"
import AppShell from "../components/AppShell"

export default function SettingsPage() {
  const navigate = useNavigate()

  return (
    <AppShell activeNav="home">
      <Flex vertical gap={24} className="page-container">
        <Flex justify="space-between" align="center">
          <h1>Settings</h1>
          <Button type="tertiary" onClick={() => navigate("/dashboard")}>← Dashboard</Button>
        </Flex>

        <p style={{ color: "#666" }}>
          Tone of voice is now managed per-brand and per-chain in the{" "}
          <button
            className="btn-ghost"
            style={{ padding: "0 4px", fontWeight: 500 }}
            onClick={() => navigate("/brands")}
          >
            Brands
          </button>{" "}
          section.
        </p>
      </Flex>
    </AppShell>
  )
}
