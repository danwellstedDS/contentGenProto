export function countCharacters(text: string): number {
  let count = 0
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0
    if (isCJK(code)) {
      count += 2
    } else {
      count += 1
    }
  }
  return count
}

function isCJK(code: number): boolean {
  return (
    (code >= 0x4e00 && code <= 0x9fff) || // CJK Unified Ideographs
    (code >= 0x3400 && code <= 0x4dbf) || // CJK Extension A
    (code >= 0x3000 && code <= 0x303f) || // CJK Symbols and Punctuation
    (code >= 0x3040 && code <= 0x309f) || // Hiragana
    (code >= 0x30a0 && code <= 0x30ff) || // Katakana (full-width)
    (code >= 0xac00 && code <= 0xd7af) || // Hangul Syllables
    (code >= 0xff00 && code <= 0xffef)    // Fullwidth Latin / Halfwidth Katakana range
  )
}

export const LIMITS = {
  HEADLINE: 30,
  DESCRIPTION: 90,
  LONG_HEADLINE: 90,
} as const

export type AssetTypeLimitKey = keyof typeof LIMITS

export function validateAsset(text: string, assetType: AssetTypeLimitKey): boolean {
  return countCharacters(text) <= LIMITS[assetType]
}
