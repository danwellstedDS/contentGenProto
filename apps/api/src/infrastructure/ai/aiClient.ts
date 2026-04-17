export class AIClient {
  constructor(
    private readonly baseUrl: string, // include /v1, e.g. https://proxy.com/v1
    private readonly apiKey: string,
    private readonly model: string,
    private readonly isLocal: boolean = false
  ) {}

  async complete(systemPrompt: string, userPrompt: string): Promise<string> {
    if (this.isLocal) {
      console.log(`[AIClient] local_model.used model=${this.model} callType=json`)
    }
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`AI proxy error ${response.status}: ${text}`)
    }

    const data = (await response.json()) as { choices: { message: { content: string } }[] }
    return data.choices[0].message.content
  }

  // For plain-text responses (no JSON mode) — used for recipe extraction
  async completePlainText(systemPrompt: string, userPrompt: string): Promise<string> {
    if (this.isLocal) {
      console.log(`[AIClient] local_model.used model=${this.model} callType=plaintext`)
    }
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`AI proxy error ${response.status}: ${text}`)
    }

    const data = (await response.json()) as { choices: { message: { content: string } }[] }
    return data.choices[0].message.content.trim()
  }
}

export function makeAIClient(): AIClient {
  const useLocal = process.env.USE_LOCAL_MODEL === "true"

  const baseUrl = useLocal
    ? process.env.LOCAL_MODEL_BASE_URL
    : process.env.AI_BASE_URL

  const apiKey = useLocal
    ? (process.env.LOCAL_MODEL_API_KEY ?? "local")
    : process.env.AI_API_KEY

  const model = useLocal
    ? process.env.LOCAL_MODEL_NAME
    : process.env.AI_MODEL

  if (!baseUrl || !model) {
    throw new Error(
      useLocal
        ? "Missing LOCAL_MODEL_BASE_URL or LOCAL_MODEL_NAME environment variables"
        : "Missing AI_BASE_URL or AI_MODEL environment variables"
    )
  }

  if (!useLocal && !apiKey) {
    throw new Error("Missing AI_API_KEY environment variable")
  }

  return new AIClient(baseUrl, apiKey ?? "local", model, useLocal)
}
