/*
  Warnings:

  - You are about to drop the `Appointments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Appointments` DROP FOREIGN KEY `appointments_ibfk_1`;

-- DropTable
DROP TABLE `Appointments`;

-- CreateTable
CREATE TABLE `Appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hour` INTEGER NOT NULL,
    `date` VARCHAR(255) NOT NULL,
    `filled` BOOLEAN NOT NULL DEFAULT false,
    `location` VARCHAR(255) NOT NULL,
    `services` VARCHAR(255) NOT NULL,
    `comments` VARCHAR(255) NOT NULL,
    `clientId` VARCHAR(255),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
