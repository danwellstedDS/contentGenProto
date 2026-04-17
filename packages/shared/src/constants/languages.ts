export const LANGUAGES = [
  { code: "en",    name: "English" },
  { code: "ja",    name: "Japanese" },
  { code: "zh_tw", name: "Chinese (Traditional)" },
  { code: "zh_cn", name: "Chinese (Simplified)" },
  { code: "ko",    name: "Korean" },
  { code: "it",    name: "Italian" },
  { code: "pt",    name: "Portuguese" },
  { code: "ru",    name: "Russian" },
  { code: "es",    name: "Spanish" },
  { code: "de",    name: "German" },
  { code: "fr",    name: "French" },
  { code: "tr",    name: "Turkish" },
  { code: "el",    name: "Greek" },
] as const

export type LanguageCode = typeof LANGUAGES[number]["code"]
