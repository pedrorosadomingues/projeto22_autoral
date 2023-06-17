/*
  Warnings:

  - You are about to drop the column `dayweek` on the `Classtime` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hour]` on the table `Classtime` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dayweekId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classtime" DROP COLUMN "dayweek",
ALTER COLUMN "hour" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Observation" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "dayweekId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dayweek" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Dayweek_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dayweek_name_key" ON "Dayweek"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Classtime_hour_key" ON "Classtime"("hour");

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_dayweekId_fkey" FOREIGN KEY ("dayweekId") REFERENCES "Dayweek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
