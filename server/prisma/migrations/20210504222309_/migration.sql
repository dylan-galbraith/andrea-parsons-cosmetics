/*
  Warnings:

  - You are about to drop the column `clientId` on the `Appointment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `appointment_ibfk_1`;

-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `clientId`;

-- CreateTable
CREATE TABLE `_AppointmentToClient` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(255) NOT NULL,
UNIQUE INDEX `_AppointmentToClient_AB_unique`(`A`, `B`),
INDEX `_AppointmentToClient_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AppointmentToClient` ADD FOREIGN KEY (`A`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppointmentToClient` ADD FOREIGN KEY (`B`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
