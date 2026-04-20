import * as XLSX from "xlsx"
import type { HotelInput } from "../../domain/hotel/Hotel"

// Intermediate type returned by parser — includes raw chain/brand strings before FK resolution
export type HotelRaw = Omit<HotelInput, "chainId" | "brandId"> & {
  chain?: string | null
  brand?: string | null
}

export interface ParseResult {
  hotels: HotelRaw[]
  imported: number
  skipped: number
  warnings: string[]
}

function sheetToRows(
  sheet: XLSX.WorkSheet,
  headerRowIndex: number,
  dataStartRow: number,
): Record<string, string>[] {
  const range = XLSX.utils.decode_range(sheet["!ref"] ?? "A1")
  const headers: string[] = []

  for (let col = range.s.c; col <= range.e.c; col++) {
    const cell = sheet[XLSX.utils.encode_cell({ r: headerRowIndex, c: col })]
    headers[col] = cell ? String(cell.v).trim() : ""
  }

  const rows: Record<string, string>[] = []
  for (let row = dataStartRow; row <= range.e.r; row++) {
    const record: Record<string, string> = {}
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cell = sheet[XLSX.utils.encode_cell({ r: row, c: col })]
      if (headers[col]) {
        record[headers[col]] = cell ? String(cell.v).trim() : ""
      }
    }
    rows.push(record)
  }
  return rows
}

function parseBool(value: string): boolean {
  return value?.toUpperCase() === "TRUE" || value === "1"
}

function parseStars(value: string): string | null {
  if (!value || value === "N/A" || value === "") return null
  const match = value.match(/^(\d)/)
  return match ? match[1] : null
}

function parseRooms(value: string): number | null {
  const n = parseInt(value, 10)
  return isNaN(n) ? null : n
}

export function parseXlsx(buffer: Buffer): ParseResult {
  const workbook = XLSX.read(buffer, { type: "buffer" })
  const warnings: string[] = []

  const findSheet = (keyword: string): XLSX.WorkSheet | null => {
    const name = workbook.SheetNames.find((n) => n.toLowerCase().includes(keyword.toLowerCase()))
    return name ? workbook.Sheets[name] : null
  }

  const basicSheet = findSheet("Basic") ?? findSheet("Hotel")
  const catSheet = findSheet("Categor")
  const amenSheet = findSheet("Amenit")
  const urlSheet = findSheet("URL")
  const addlSheet = findSheet("Additional")
  const descSheet = findSheet("Descript")

  if (!basicSheet) {
    throw new Error("Could not find Hotel Basic Info sheet in uploaded file")
  }

  // Hotel Basic Info: row 1 = headers, row 2 = instructions, row 3 = first data (1-indexed)
  //                  → headerRowIndex=0, dataStartRow=2 (0-indexed)
  const basicRows = sheetToRows(basicSheet, 0, 2)

  // All other sheets: rows 1-2 = section labels, row 3 = headers, row 4 = instructions, row 5 = first data (1-indexed)
  //                  → headerRowIndex=2, dataStartRow=4 (0-indexed)
  const catRows = catSheet ? sheetToRows(catSheet, 2, 4) : []
  const amenRows = amenSheet ? sheetToRows(amenSheet, 2, 4) : []
  const urlRows = urlSheet ? sheetToRows(urlSheet, 2, 4) : []
  const addlRows = addlSheet ? sheetToRows(addlSheet, 2, 4) : []
  const descRows = descSheet ? sheetToRows(descSheet, 2, 4) : []

  console.log(`[xlsxParser] sheets found: basic=${basicRows.length} cat=${catRows.length} amen=${amenRows.length} url=${urlRows.length} addl=${addlRows.length} desc=${descRows.length}`)

  // Index supplementary sheets by Hotel Code
  const catByCode: Record<string, Record<string, string>> = {}
  for (const r of catRows) {
    const code = r["Hotel Code"] ?? r["hotel_code"] ?? ""
    if (code) catByCode[code] = r
  }

  const amenByCode: Record<string, Record<string, string>> = {}
  for (const r of amenRows) {
    const code = r["Hotel Code"] ?? r["hotel_code"] ?? ""
    if (code) amenByCode[code] = r
  }

  const urlByCode: Record<string, Record<string, string>> = {}
  for (const r of urlRows) {
    const code = r["Hotel Code"] ?? r["hotel_code"] ?? ""
    if (code) urlByCode[code] = r
  }

  const addlByCode: Record<string, Record<string, string>> = {}
  for (const r of addlRows) {
    const code = r["Hotel Code"] ?? r["hotel_code"] ?? ""
    if (code) addlByCode[code] = r
  }

  const descByCode: Record<string, string> = {}
  for (const r of descRows) {
    const code = r["Hotel Code"] ?? r["hotel_code"] ?? ""
    const desc = r["Profile Description"] ?? r["Description"] ?? r["description"] ?? ""
    if (code) descByCode[code] = desc
  }

  const LANG_CODE_MAP: Record<string, string> = {
    Japanese: "ja",
    "Chinese (traditional)": "zh_tw",
    "Chinese (Traditional)": "zh_tw",
    "Chinese (simplified)": "zh_cn",
    "Chinese (Simplified)": "zh_cn",
    Korean: "ko",
    Italian: "it",
    Portuguese: "pt",
    Russian: "ru",
    Spanish: "es",
    German: "de",
    French: "fr",
    Turkish: "tr",
    Greek: "el",
  }

  // Exact column names as they appear in the Categories sheet
  const CAT_COLUMN_MAP: Record<string, string> = {
    airportHotel: "Airport Hotel",
    allInclusive: "All-inclusive Hotel",
    allSuite: "All-suite Hotel",
    bandB: "B&B",
    beachFront: "Beach Front Hotel",
    businessHotel: "Business Hotel",
    casinoHotel: "Casino Hotel",
    extendedStay: "Extended stay Hotel",
    golfResort: "Golf Resort",
    japaneseInn: "Japanese Inn",
    resortHotel: "Resort Hotel",
    servicedApartment: "Serviced Apartment",
    skiHotel: "Ski Hotel",
    spaHotel: "Spa Hotel",
    vacationRental: "Vacation Rental",
  }

  // URL columns: homepage = "[Language] Final URL", others = "[Language] [Type] URL"
  // e.g. "English Final URL", "Japanese Rooms URL", "Korean Gallery URL"
  const URL_TYPES = ["rooms", "gallery", "dining", "amenities", "location", "reviews", "offers", "events"]

  const hotels: HotelRaw[] = []
  let skipped = 0

  for (const row of basicRows) {
    const hotelCode = row["Hotel Code"] ?? row["hotel_code"] ?? ""
    const hotelName = row["Hotel"] ?? row["hotel_name"] ?? row["Hotel Name"] ?? ""

    if (!hotelCode) {
      skipped++
      warnings.push(`Row skipped: missing Hotel Code (name: ${hotelName || "unknown"})`)
      continue
    }
    if (!hotelName) {
      skipped++
      warnings.push(`Row skipped: missing Hotel Name (code: ${hotelCode})`)
      continue
    }

    // Build localNames from basic row columns
    const localNames: Record<string, Record<string, string>> = {}
    const nameFields: Array<{ prefix: string; code: string }> = [
      { prefix: "Japanese", code: "ja" },
      { prefix: "Chinese (traditional)", code: "zh_tw" },
      { prefix: "Chinese (Traditional)", code: "zh_tw" },
      { prefix: "Chinese (simplified)", code: "zh_cn" },
      { prefix: "Chinese (Simplified)", code: "zh_cn" },
      { prefix: "Korean", code: "ko" },
      { prefix: "Italian", code: "it" },
      { prefix: "Portuguese", code: "pt" },
      { prefix: "Russian", code: "ru" },
      { prefix: "Spanish", code: "es" },
      { prefix: "German", code: "de" },
      { prefix: "French", code: "fr" },
      { prefix: "Turkish", code: "tr" },
      { prefix: "Greek", code: "el" },
    ]

    for (const { prefix, code } of nameFields) {
      if (localNames[code]) continue
      const entry: Record<string, string> = {}
      const keyMap = [
        [`${prefix} Hotel Name`, "hotelName"],
        [`${prefix} Brand`, "brand"],
        [`${prefix} Chain`, "chain"],
        [`${prefix} Country`, "country"],
        [`${prefix} City`, "city"],
      ]
      for (const [colKey, field] of keyMap) {
        if (row[colKey]) entry[field] = row[colKey]
      }
      if (Object.keys(entry).length > 0) localNames[code] = entry
    }

    // Categories — use exact column names from the file
    const catRow = catByCode[hotelCode] ?? {}
    const categories: Record<string, boolean> = {}
    for (const [key, colName] of Object.entries(CAT_COLUMN_MAP)) {
      categories[key] = parseBool(catRow[colName] ?? "")
    }

    // Amenities — camelCase the column name as key
    const amenRow = amenByCode[hotelCode] ?? {}
    const amenities: Record<string, Record<string, boolean>> = { all: {} }
    for (const [col, val] of Object.entries(amenRow)) {
      if (col === "Hotel Code" || col === "Hotel") continue
      const key = col
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim()
        .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toLowerCase())
      if (key) amenities.all[key] = parseBool(val)
    }

    // URLs — "[Language] Final URL" for homepage, "[Language] [Type] URL" for others
    const urlRow = urlByCode[hotelCode] ?? {}
    const urls: Record<string, Record<string, string>> = {}

    // Homepage URL (called "Final URL" in the file)
    for (const [langName, langCode] of Object.entries(LANG_CODE_MAP)) {
      const col = `${langName} Final URL`
      if (urlRow[col]) {
        if (!urls[langCode]) urls[langCode] = {}
        urls[langCode]["homepage"] = urlRow[col]
      }
    }
    if (urlRow["English Final URL"]) {
      if (!urls["en"]) urls["en"] = {}
      urls["en"]["homepage"] = urlRow["English Final URL"]
    }

    // Other URL types
    for (const urlType of URL_TYPES) {
      const typeName = urlType.charAt(0).toUpperCase() + urlType.slice(1)
      for (const [langName, langCode] of Object.entries(LANG_CODE_MAP)) {
        const col = `${langName} ${typeName} URL`
        if (urlRow[col]) {
          if (!urls[langCode]) urls[langCode] = {}
          urls[langCode][urlType] = urlRow[col]
        }
      }
      const engCol = `English ${typeName} URL`
      if (urlRow[engCol]) {
        if (!urls["en"]) urls["en"] = {}
        urls["en"][urlType] = urlRow[engCol]
      }
    }

    // Additional info
    const addlRow = addlByCode[hotelCode] ?? {}
    const googlePlaceId = addlRow["Google Place ID"] ?? addlRow["googlePlaceId"] ?? null
    const starRating = parseStars(addlRow["Stars"] ?? addlRow["Star Rating"] ?? row["Star Rating"] ?? "")
    const roomCount = parseRooms(addlRow["Rooms"] ?? addlRow["Room Count"] ?? row["Room Count"] ?? "")

    // Description
    const description = descByCode[hotelCode] ?? row["Profile Description"] ?? row["Description"] ?? null

    hotels.push({
      hotelCode,
      hotelName,
      chain: row["Chain"] ?? null,
      brand: row["Brand"] ?? null,
      country: row["Country"] ?? null,
      city: row["City"] ?? null,
      starRating: starRating ?? null,
      roomCount: roomCount ?? null,
      googlePlaceId: googlePlaceId ?? null,
      description: description || null,
      categories,
      amenities,
      urls,
      localNames,
    })
  }

  console.log(`[xlsxParser] parsed ${hotels.length} hotels, skipped ${skipped}, warnings ${warnings.length}`)

  return {
    hotels,
    imported: hotels.length,
    skipped,
    warnings,
  }
}
