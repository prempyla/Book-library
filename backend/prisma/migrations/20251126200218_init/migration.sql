/*
  Warnings:

  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authid` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `authorID` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfbirth` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfdeath` on the `Author` table. All the data in the column will be lost.
  - The primary key for the `Genre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gName` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `geId` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `genreid` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstName` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `familyName` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id` to the `Genre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Author` DROP FOREIGN KEY `Author_authid_fkey`;

-- DropForeignKey
ALTER TABLE `Genre` DROP FOREIGN KEY `Genre_geId_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP PRIMARY KEY,
    DROP COLUMN `authid`,
    DROP COLUMN `authorID`,
    DROP COLUMN `dateOfbirth`,
    DROP COLUMN `dateOfdeath`,
    ADD COLUMN `dateOfBirth` DATETIME(3) NULL,
    ADD COLUMN `dateOfDeath` DATETIME(3) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `firstName` VARCHAR(191) NOT NULL,
    MODIFY `familyName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Genre` DROP PRIMARY KEY,
    DROP COLUMN `gName`,
    DROP COLUMN `geId`,
    DROP COLUMN `genreid`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Books`;

-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BookToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BookToGenre_AB_unique`(`A`, `B`),
    INDEX `_BookToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AuthorToBook` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AuthorToBook_AB_unique`(`A`, `B`),
    INDEX `_AuthorToBook_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);

-- AddForeignKey
ALTER TABLE `_BookToGenre` ADD CONSTRAINT `_BookToGenre_A_fkey` FOREIGN KEY (`A`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookToGenre` ADD CONSTRAINT `_BookToGenre_B_fkey` FOREIGN KEY (`B`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToBook` ADD CONSTRAINT `_AuthorToBook_A_fkey` FOREIGN KEY (`A`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToBook` ADD CONSTRAINT `_AuthorToBook_B_fkey` FOREIGN KEY (`B`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
