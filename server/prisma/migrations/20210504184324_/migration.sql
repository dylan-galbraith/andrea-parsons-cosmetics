/*
  Warnings:

  - You are about to drop the column `day` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Appointments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Appointments` DROP COLUMN `day`,
    DROP COLUMN `month`,
    DROP COLUMN `year`;
