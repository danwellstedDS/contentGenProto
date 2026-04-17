import { PostHog } from "posthog-node"

let _client: PostHog | null = null

function getClient(): PostHog | null {
  const key = process.env.POSTHOG_API_KEY
  if (!key) return null
  if (!_client) {
    _client = new PostHog(key, { host: process.env.POSTHOG_HOST ?? "https://eu.posthog.com" })
  }
  return _client
}

export function captureEvent(
  distinctId: string,
  event: string,
  properties: Record<string, unknown>
): void {
  getClient()?.capture({ distinctId, event, properties })
}

export function identifyUser(
  distinctId: string,
  properties: { email: string; name: string }
): void {
  getClient()?.identify({ distinctId, properties })
}
