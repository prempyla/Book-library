-- CreateTable
CREATE TABLE `Books` (
    `bookID` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `summary` VARCHAR(191) NULL,

    PRIMARY KEY (`bookID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `authid` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NULL,
    `familyName` VARCHAR(191) NULL,
    `dateOfbirth` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateOfdeath` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `authorID` INTEGER NOT NULL,

    PRIMARY KEY (`authid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genreid` INTEGER NOT NULL AUTO_INCREMENT,
    `gName` VARCHAR(191) NULL,
    `geId` INTEGER NOT NULL,

    PRIMARY KEY (`genreid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_authid_fkey` FOREIGN KEY (`authid`) REFERENCES `Books`(`bookID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Genre` ADD CONSTRAINT `Genre_geId_fkey` FOREIGN KEY (`geId`) REFERENCES `Books`(`bookID`) ON DELETE RESTRICT ON UPDATE CASCADE;
