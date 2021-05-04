/*
  Warnings:

  - Added the required column `date` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointments` ADD COLUMN     `date` VARCHAR(191) NOT NULL;
