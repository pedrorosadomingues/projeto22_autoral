/*
  Warnings:

  - You are about to drop the column `dayweekId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Dayweek` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `weekdayId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_dayweekId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "dayweekId",
ADD COLUMN     "weekdayId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Dayweek";

-- CreateTable
CREATE TABLE "Weekday" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Weekday_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Weekday_name_key" ON "Weekday"("name");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_weekdayId_fkey" FOREIGN KEY ("weekdayId") REFERENCES "Weekday"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
