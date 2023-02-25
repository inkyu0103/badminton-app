/*
  Warnings:

  - You are about to drop the `Racket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_RACKET_ID_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_USER_ID_fkey";

-- DropTable
DROP TABLE "Racket";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "RACKET" (
    "RACKET_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RACKET_pkey" PRIMARY KEY ("RACKET_ID")
);

-- CreateTable
CREATE TABLE "REVIEW" (
    "id" SERIAL NOT NULL,
    "control" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "design" INTEGER NOT NULL,
    "recommend" INTEGER NOT NULL,
    "review" INTEGER NOT NULL,
    "RACKET_ID" INTEGER NOT NULL,
    "USER_ID" INTEGER NOT NULL,

    CONSTRAINT "REVIEW_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RACKET_name_key" ON "RACKET"("name");

-- AddForeignKey
ALTER TABLE "REVIEW" ADD CONSTRAINT "REVIEW_RACKET_ID_fkey" FOREIGN KEY ("RACKET_ID") REFERENCES "RACKET"("RACKET_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "REVIEW" ADD CONSTRAINT "REVIEW_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "USER"("USER_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
