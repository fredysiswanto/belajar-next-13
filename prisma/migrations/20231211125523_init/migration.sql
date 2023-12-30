-- CreateTable
CREATE TABLE `Emails` (
    `emailId` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectEmail` VARCHAR(191) NULL,
    `toEmail` VARCHAR(191) NOT NULL,
    `fromEmail` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `flatform` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`emailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flatform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
