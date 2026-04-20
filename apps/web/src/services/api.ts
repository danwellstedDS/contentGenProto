import axios from "axios"
import type { AxiosInstance } from "axios"
import type {
  HotelProfile,
  ToneConfig,
  Generation,
  GeneratedAsset,
  DomainEvent,
  Project,
} from "@hotel-copy/shared"

const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3001"

function createClient(): AxiosInstance {
  const client = axios.create({ baseURL: BASE_URL })

  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })

  client.interceptors.response.use(
    (r) => r,
    (err) => {
      if (err.response?.status === 401) {
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
      return Promise.reject(err)
    }
  )

  return client
}

const http = createClient()

// Auth
export const authApi = {
  login: async (email: string, password: string) => {
    const { data } = await http.post<{ token: string; user: { id: string; email: string; name: string } }>(
      "/auth/login",
      { email, password }
    )
    return data
  },
  me: async () => {
    const { data } = await http.get<{ id: string; email: string; name: string }>("/auth/me")
    return data
  },
}

// Projects
export const projectsApi = {
  list: async () => {
    const { data } = await http.get<Project[]>("/projects")
    return data
  },
  create: async (name: string) => {
    const { data } = await http.post<Project>("/projects", { name })
    return data
  },
  get: async (id: string) => {
    const { data } = await http.get<Project>(`/projects/${id}`)
    return data
  },
  delete: async (id: string) => {
    await http.delete(`/projects/${id}`)
  },
  restore: async (id: string) => {
    await http.patch(`/projects/${id}/restore`)
  },
  events: async (id: string) => {
    const { data } = await http.get<DomainEvent[]>(`/projects/${id}/events`)
    return data
  },
  fork: async (id: string) => {
    const { data } = await http.post<{ newProjectId: string }>(`/projects/${id}/fork`)
    return data
  },
}

// Hotels
export const hotelsApi = {
  import: async (projectId: string, file: File) => {
    const form = new FormData()
    form.append("file", file)
    const { data } = await http.post<{ imported: number; skipped: number; warnings: string[] }>(
      `/projects/${projectId}/import`,
      form,
      { headers: { "Content-Type": "multipart/form-data" } }
    )
    return data
  },
  list: async (projectId: string) => {
    const { data } = await http.get<HotelProfile[]>(`/projects/${projectId}/hotels`)
    return data
  },
  patch: async (projectId: string, hotelCode: string, body: { notes?: string; included?: boolean }) => {
    const { data } = await http.patch<HotelProfile>(`/projects/${projectId}/hotels/${hotelCode}`, body)
    return data
  },
  selection: async (projectId: string, action: "all" | "none") => {
    await http.post(`/projects/${projectId}/hotels/selection`, { action })
  },
}

// Tone configs (global)
export const toneApi = {
  list: async () => {
    const { data } = await http.get<ToneConfig[]>("/tone-configs")
    return data
  },
  create: async (body: Omit<ToneConfig, "id" | "createdAt" | "updatedAt">) => {
    const { data } = await http.post<ToneConfig>("/tone-configs", body)
    return data
  },
  update: async (toneConfigId: string, body: Partial<Omit<ToneConfig, "id" | "level" | "entityName" | "createdAt" | "updatedAt">>) => {
    const { data } = await http.put<ToneConfig>(`/tone-configs/${toneConfigId}`, body)
    return data
  },
  delete: async (toneConfigId: string) => {
    await http.delete(`/tone-configs/${toneConfigId}`)
  },
}

// Generation
export const generationApi = {
  trigger: async (projectId: string, options?: { languages?: string[]; campaignContext?: string; name?: string }) => {
    const { data } = await http.post<{ generationId: string }>(`/projects/${projectId}/generations`, options ?? {})
    return data
  },
  updateName: async (projectId: string, generationId: string, name: string) => {
    const { data } = await http.patch<Generation>(`/projects/${projectId}/generations/${generationId}`, { name })
    return data
  },
  latest: async (projectId: string) => {
    const { data } = await http.get<Generation>(`/projects/${projectId}/generations/latest`)
    return data
  },
  status: async (projectId: string, generationId: string) => {
    const { data } = await http.get<Generation>(`/projects/${projectId}/generations/${generationId}`)
    return data
  },
  assets: async (projectId: string, generationId: string) => {
    const { data } = await http.get<GeneratedAsset[]>(`/projects/${projectId}/generations/${generationId}/assets`)
    return data
  },
  editAsset: async (projectId: string, generationId: string, assetId: string, copies: Record<string, string>) => {
    const { data } = await http.patch<GeneratedAsset>(
      `/projects/${projectId}/generations/${generationId}/assets/${assetId}`,
      { copies }
    )
    return data
  },
  regenerateAsset: async (projectId: string, generationId: string, assetId: string) => {
    const { data } = await http.post<GeneratedAsset>(
      `/projects/${projectId}/generations/${generationId}/assets/${assetId}/regenerate`
    )
    return data
  },
  extractRecipe: async (
    projectId: string,
    generationId: string,
    anchorHotelCode: string,
    approvedAssets: Array<{ variantCode: string; assetType: string; copies: Record<string, string> }>,
    campaignContext: string
  ) => {
    const { data } = await http.post<{ recipe: string }>(
      `/projects/${projectId}/generations/${generationId}/extract-recipe`,
      { anchorHotelCode, approvedAssets, campaignContext }
    )
    return data
  },

  applyRecipe: async (
    projectId: string,
    generationId: string,
    recipe: string,
    anchorHotelCode: string,
    recipeEdited: boolean
  ) => {
    const { data } = await http.post<{ status: string }>(
      `/projects/${projectId}/generations/${generationId}/apply-recipe`,
      { recipe, anchorHotelCode, recipeEdited }
    )
    return data
  },

  regenerateUnlocked: async (projectId: string, generationId: string, lockedAssetIds: string[], instruction?: string) => {
    const { data } = await http.post<{ status: string }>(
      `/projects/${projectId}/generations/${generationId}/regenerate-unlocked`,
      { lockedAssetIds, instruction }
    )
    return data
  },
  approveHotel: async (projectId: string, generationId: string, hotelCode: string) => {
    const { data } = await http.post<{ approvedHotelCodes: string[] }>(
      `/projects/${projectId}/generations/${generationId}/approve-hotel`,
      { hotelCode }
    )
    return data
  },
  unapproveHotel: async (projectId: string, generationId: string, hotelCode: string) => {
    const { data } = await http.post<{ approvedHotelCodes: string[] }>(
      `/projects/${projectId}/generations/${generationId}/unapprove-hotel`,
      { hotelCode }
    )
    return data
  },
  autoApprove: async (projectId: string, generationId: string, hotelCodes: string[]) => {
    const { data } = await http.post<{ status: string }>(
      `/projects/${projectId}/generations/${generationId}/auto-approve`,
      { hotelCodes }
    )
    return data
  },
  export: async (projectId: string, generationId: string, assetType: string) => {
    const token = localStorage.getItem("token")
    const response = await fetch(
      `${BASE_URL}/projects/${projectId}/generations/${generationId}/export?assetType=${assetType}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    const violationCount = parseInt(response.headers.get("X-Violation-Count") ?? "0", 10)
    const blob = await response.blob()
    const filename = response.headers.get("Content-Disposition")?.match(/filename="([^"]+)"/)?.[1] ?? `${assetType}.csv`
    return { blob, filename, violationCount }
  },
}
