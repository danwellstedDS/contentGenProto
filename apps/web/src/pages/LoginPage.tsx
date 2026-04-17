import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Input, Card, Flex, Alert } from "@derbysoft/neat-design"
import { authApi } from "../services/api"
import { useAuthStore } from "../store/authStore"
import { analytics } from "../lib/analytics"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const setAuth = useAuthStore((s) => s.setAuth)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { token, user } = await authApi.login(email, password)
      setAuth(token, user)
      analytics.identify(user.id, { email: user.email, name: user.name })
      navigate("/dashboard")
    } catch {
      setError("Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex vertical align="center" justify="center" className="login-page">
      <Card className="login-card">
        <Flex vertical gap={24}>
          <div className="login-brand">
            <div className="login-logo-mark">D<span>S</span></div>
            <div>
              <p className="login-title">DerbySoft</p>
              <p className="login-subtitle">AI Content Generator</p>
            </div>
          </div>

          {error && <Alert type="error" message={error} />}

          <form onSubmit={handleSubmit}>
            <Flex vertical gap={16}>
              <Flex vertical gap={4}>
                <label className="form-label">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </Flex>
              <Flex vertical gap={4}>
                <label className="form-label">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </Flex>
              <Button htmlType="submit" type="primary" disabled={loading} loading={loading}>
                {loading ? "Signing in…" : "Sign in"}
              </Button>
            </Flex>
          </form>
        </Flex>
      </Card>
    </Flex>
  )
}
