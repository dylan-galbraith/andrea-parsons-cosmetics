/*
  Warnings:

  - You are about to drop the `_AppointmentToClient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_AppointmentToClient` DROP FOREIGN KEY `_appointmenttoclient_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_AppointmentToClient` DROP FOREIGN KEY `_appointmenttoclient_ibfk_2`;

-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN     `clientId` VARCHAR(255);

-- DropTable
DROP TABLE `_AppointmentToClient`;
