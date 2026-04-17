-- Add IN_REVIEW to ProjectStatus enum
ALTER TYPE "ProjectStatus" ADD VALUE 'IN_REVIEW';

-- Add versioning + campaign type to Project
ALTER TABLE "Project"
  ADD COLUMN "campaignType" TEXT,
  ADD COLUMN "versionNumber" INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN "parentProjectId" TEXT;

ALTER TABLE "Project"
  ADD CONSTRAINT "Project_parentProjectId_fkey"
  FOREIGN KEY ("parentProjectId") REFERENCES "Project"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

-- Track per-hotel approvals on Generation
ALTER TABLE "Generation"
  ADD COLUMN "approvedHotelCodes" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
