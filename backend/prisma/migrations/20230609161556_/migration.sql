/*
  Warnings:

  - You are about to drop the column `studentid` on the `FinishedUnit` table. All the data in the column will be lost.
  - You are about to drop the column `unitid` on the `FinishedUnit` table. All the data in the column will be lost.
  - You are about to drop the column `createdat` on the `Nivel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedat` on the `Nivel` table. All the data in the column will be lost.
  - You are about to drop the column `studentid` on the `Observation` table. All the data in the column will be lost.
  - You are about to drop the column `createdat` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `nivelid` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updatedat` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `nivelid` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `studentid` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `createdat` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedat` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ClasstimeStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserStudent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `studentId` to the `FinishedUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitId` to the `FinishedUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classTimeId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivelId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivelId` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClasstimeStudent" DROP CONSTRAINT "ClasstimeStudent_classtimeid_fkey";

-- DropForeignKey
ALTER TABLE "ClasstimeStudent" DROP CONSTRAINT "ClasstimeStudent_studentid_fkey";

-- DropForeignKey
ALTER TABLE "FinishedUnit" DROP CONSTRAINT "FinishedUnit_studentid_fkey";

-- DropForeignKey
ALTER TABLE "FinishedUnit" DROP CONSTRAINT "FinishedUnit_unitid_fkey";

-- DropForeignKey
ALTER TABLE "Observation" DROP CONSTRAINT "Observation_studentid_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_nivelid_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_nivelid_fkey";

-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_studentid_fkey";

-- DropForeignKey
ALTER TABLE "UserStudent" DROP CONSTRAINT "UserStudent_studentid_fkey";

-- DropForeignKey
ALTER TABLE "UserStudent" DROP CONSTRAINT "UserStudent_userid_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Classtime" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Classtime_id_seq";

-- AlterTable
ALTER TABLE "FinishedUnit" DROP COLUMN "studentid",
DROP COLUMN "unitid",
ADD COLUMN     "studentId" INTEGER NOT NULL,
ADD COLUMN     "unitId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "FinishedUnit_id_seq";

-- AlterTable
ALTER TABLE "Nivel" DROP COLUMN "createdat",
DROP COLUMN "updatedat",
ADD COLUMN     "createdAt" DATE,
ADD COLUMN     "updatedAt" DATE,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Nivel_id_seq";

-- AlterTable
ALTER TABLE "Observation" DROP COLUMN "studentid",
ADD COLUMN     "studentId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Observation_id_seq";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "createdat",
DROP COLUMN "nivelid",
DROP COLUMN "updatedat",
ADD COLUMN     "classTimeId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" DATE,
ADD COLUMN     "nivelId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" DATE,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Student_id_seq";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "nivelid",
DROP COLUMN "studentid",
ADD COLUMN     "nivelId" INTEGER NOT NULL,
ADD COLUMN     "studentId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Unit_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdat",
DROP COLUMN "updatedat",
ADD COLUMN     "createdAt" DATE,
ADD COLUMN     "updatedAt" DATE,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "ClasstimeStudent";

-- DropTable
DROP TABLE "UserStudent";

-- AddForeignKey
ALTER TABLE "FinishedUnit" ADD CONSTRAINT "FinishedUnit_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "FinishedUnit" ADD CONSTRAINT "FinishedUnit_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classTimeId_fkey" FOREIGN KEY ("classTimeId") REFERENCES "Classtime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_nivelId_fkey" FOREIGN KEY ("nivelId") REFERENCES "Nivel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_nivelId_fkey" FOREIGN KEY ("nivelId") REFERENCES "Nivel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
