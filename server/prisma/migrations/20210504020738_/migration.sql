-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
UNIQUE INDEX `Client.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hour` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `filled` BOOLEAN NOT NULL DEFAULT false,
    `location` VARCHAR(255) NOT NULL,
    `services` VARCHAR(255) NOT NULL,
    `clientId` VARCHAR(255),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointments` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
