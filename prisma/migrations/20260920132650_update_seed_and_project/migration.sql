/*
  Warnings:

  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "dataHash" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "url",
ADD COLUMN     "demo" TEXT,
ADD COLUMN     "source" TEXT;
