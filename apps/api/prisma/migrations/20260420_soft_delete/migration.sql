-- AlterTable: add soft-delete column to Project
ALTER TABLE "Project" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Project_deletedAt_idx" ON "Project"("deletedAt");
