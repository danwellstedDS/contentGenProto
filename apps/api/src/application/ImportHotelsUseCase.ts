import { parseXlsx } from "../infrastructure/xlsx/xlsxParser"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export async function importHotels(
  userId: string,
  buffer: Buffer,
  mode: "replace" | "merge" = "merge"
) {
  const result = parseXlsx(buffer)

  if (mode === "replace") {
    console.log(`[ImportHotels] replace mode — soft-deleting all library hotels`)
    await HotelRepository.softDeleteAll()
  }

  console.log(`[ImportHotels] upserting ${result.hotels.length} hotels in transaction`)
  await HotelRepository.upsertMany(result.hotels)

  await DomainEventStore.write({
    eventType: "hotel.imported",
    aggregateId: "library",
    aggregateType: "Hotel",
    userId,
    payload: {
      hotelCount: result.imported,
      skipped: result.skipped,
      validationErrors: result.warnings.length,
      mode,
    },
  })

  return result
}
