export const VARIANTS = [
  { code: "01", label: "Name" },
  { code: "02", label: "Access" },
  { code: "03", label: "Membership" },
  { code: "04", label: "Best Rate" },
  { code: "05", label: "WiFi" },
  { code: "06", label: "Website" },
  { code: "07", label: "Room 1" },
  { code: "08", label: "Room 2" },
  { code: "09", label: "Facility 1" },
  { code: "10", label: "Facility 2" },
  { code: "11", label: "Service 1" },
  { code: "12", label: "Service 2" },
  { code: "13", label: "Concept" },
  { code: "14", label: "Meal" },
  { code: "15", label: "Best For" },
] as const

export type VariantCode = typeof VARIANTS[number]["code"]
export type VariantLabel = typeof VARIANTS[number]["label"]
