import posthog from "posthog-js"

/**
 * Thin wrapper around posthog-js.
 * All methods are safe to call even when PostHog is not initialised —
 * posthog-js no-ops gracefully, and in DEV mode opt_out_capturing() is set
 * in main.tsx so nothing is sent locally.
 */
export const analytics = {
  identify(userId: string, props: { email: string; name: string }) {
    posthog.identify(userId, { email: props.email, name: props.name })
  },

  track(event: string, props?: Record<string, unknown>) {
    posthog.capture(event, props)
  },

  page(path: string) {
    posthog.capture("$pageview", { $current_url: path })
  },

  reset() {
    posthog.reset()
  },
}
