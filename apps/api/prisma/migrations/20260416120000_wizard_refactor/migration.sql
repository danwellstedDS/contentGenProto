-- Remove project relation from ToneConfig (make global)
ALTER TABLE "ToneConfig" DROP CONSTRAINT IF EXISTS "ToneConfig_projectId_fkey";
DROP INDEX IF EXISTS "ToneConfig_projectId_level_entityName_key";
ALTER TABLE "ToneConfig" DROP COLUMN IF EXISTS "projectId";

-- Add new unique constraint on ToneConfig
CREATE UNIQUE INDEX "ToneConfig_level_entityName_key" ON "ToneConfig"("level", "entityName");

-- Add name, languages, campaignContext to Generation
ALTER TABLE "Generation" ADD COLUMN IF NOT EXISTS "name" TEXT;
ALTER TABLE "Generation" ADD COLUMN IF NOT EXISTS "languages" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Generation" ADD COLUMN IF NOT EXISTS "campaignContext" TEXT;
