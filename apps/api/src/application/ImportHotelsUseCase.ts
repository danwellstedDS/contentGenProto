import { parseXlsx } from "../infrastructure/xlsx/xlsxParser"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export async function importHotels(projectId: string, userId: string, buffer: Buffer) {
  const result = parseXlsx(buffer)

  console.log(`[ImportHotels] upserting ${result.hotels.length} hotels in transaction`)
  await HotelRepository.upsertMany(projectId, result.hotels)

  await DomainEventStore.write({
    eventType: "file.imported",
    aggregateId: projectId,
    aggregateType: "Project",
    userId,
    projectId,
    payload: {
      hotelCount: result.imported,
      skipped: result.skipped,
      validationErrors: result.warnings.length,
    },
  })

  return result
}
