/*
  Warnings:

  - Added the required column `cpf` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "cpf" VARCHAR(255) NOT NULL;
