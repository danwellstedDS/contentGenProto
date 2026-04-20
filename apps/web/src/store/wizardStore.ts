import { create } from "zustand"
import type { HotelProfile, GeneratedAsset } from "@hotel-copy/shared"

export interface WizardState {
  // Step 1 — import result
  importResult: { imported: number; skipped: number; warnings: string[]; fileName?: string } | null

  // Step 2 — hotel selection
  hotels: HotelProfile[]
  selectedHotelCodes: Set<string>

  // Step 3 — language selection
  selectedLanguages: string[]

  // Step 4 — campaign type
  campaignType: "PPC" | "PMAX" | null

  // Step 6 — generation config & job
  generationName: string
  campaignContext: string
  generationId: string | null
  generationStatus: "idle" | "PENDING" | "RUNNING" | "COMPLETE" | "FAILED"

  // Step 8 — review
  assets: GeneratedAsset[]
  approvedHotelCodes: Set<string>
  reviewHotelIndex: number

  // Step 8 — recipe modal (fires once per project)
  recipeModalDismissed: boolean

  // Step 9 — spot-check
  sampledHotelCodes: string[]
  spotCheckResults: Record<string, "approved" | "rejected">

  // Navigation
  maxReachedStep: number

  // Actions
  setImportResult: (result: WizardState["importResult"]) => void
  setHotels: (hotels: HotelProfile[]) => void
  toggleHotel: (code: string) => void
  selectAllHotels: () => void
  deselectAllHotels: () => void
  setSelectedLanguages: (langs: string[]) => void
  setCampaignType: (type: "PPC" | "PMAX") => void
  setGenerationName: (name: string) => void
  setCampaignContext: (ctx: string) => void
  setGenerationId: (id: string) => void
  setGenerationStatus: (status: WizardState["generationStatus"]) => void
  setAssets: (assets: GeneratedAsset[]) => void
  approveHotel: (code: string) => void
  unapproveHotel: (code: string) => void
  setReviewHotelIndex: (index: number) => void
  setRecipeModalDismissed: (v: boolean) => void
  setSampledHotelCodes: (codes: string[]) => void
  setSpotCheckResult: (code: string, result: "approved" | "rejected") => void
  advanceTo: (step: number) => void
  reset: () => void
}

const initialState = {
  importResult: null,
  hotels: [],
  selectedHotelCodes: new Set<string>(),
  selectedLanguages: ["en", "ja", "zh_tw", "zh_cn", "ko", "it", "pt", "ru", "es", "de", "fr", "tr", "el"],
  campaignType: null as "PPC" | "PMAX" | null,
  generationName: "",
  campaignContext: "",
  generationId: null,
  generationStatus: "idle" as const,
  assets: [],
  approvedHotelCodes: new Set<string>(),
  reviewHotelIndex: 0,
  recipeModalDismissed: false,
  sampledHotelCodes: [],
  spotCheckResults: {} as Record<string, "approved" | "rejected">,
  maxReachedStep: 1,
}

export const useWizardStore = create<WizardState>((set, get) => ({
  ...initialState,

  setImportResult: (result) => set({ importResult: result }),

  setHotels: (hotels) => {
    const includedCodes = new Set(hotels.filter((h) => h.included).map((h) => h.hotelCode))
    set({ hotels, selectedHotelCodes: includedCodes })
  },

  toggleHotel: (code) => {
    const next = new Set(get().selectedHotelCodes)
    if (next.has(code)) next.delete(code)
    else next.add(code)
    set({ selectedHotelCodes: next })
  },

  selectAllHotels: () => {
    const codes = new Set(get().hotels.map((h) => h.hotelCode))
    set({ selectedHotelCodes: codes })
  },

  deselectAllHotels: () => {
    set({ selectedHotelCodes: new Set() })
  },

  setSelectedLanguages: (langs) => set({ selectedLanguages: langs }),

  setCampaignType: (type) => set({ campaignType: type }),

  setGenerationName: (name) => set({ generationName: name }),

  setCampaignContext: (ctx) => set({ campaignContext: ctx }),

  setGenerationId: (id) => set({ generationId: id }),

  setGenerationStatus: (status) => set({ generationStatus: status }),

  setAssets: (assets) => set({ assets }),

  approveHotel: (code) => {
    const next = new Set(get().approvedHotelCodes)
    next.add(code)
    set({ approvedHotelCodes: next })
  },

  unapproveHotel: (code) => {
    const next = new Set(get().approvedHotelCodes)
    next.delete(code)
    set({ approvedHotelCodes: next })
  },

  setReviewHotelIndex: (index) => set({ reviewHotelIndex: index }),

  setRecipeModalDismissed: (v) => set({ recipeModalDismissed: v }),

  setSampledHotelCodes: (codes) => set({ sampledHotelCodes: codes }),

  setSpotCheckResult: (code, result) => {
    set((s) => ({ spotCheckResults: { ...s.spotCheckResults, [code]: result } }))
  },

  advanceTo: (step) => {
    set((s) => ({ maxReachedStep: Math.max(s.maxReachedStep, step) }))
  },

  reset: () => set(initialState),
}))
