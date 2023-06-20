/*
  Warnings:

  - You are about to drop the column `studentId` on the `Unit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Nivel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_studentId_fkey";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "studentId";

-- CreateIndex
CREATE UNIQUE INDEX "Nivel_name_key" ON "Nivel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_cpf_key" ON "Student"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
