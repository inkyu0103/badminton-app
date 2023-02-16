-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('S', 'A', 'B', 'C', 'D', 'E');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "USER" (
    "USER_ID" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rank" "Rank" NOT NULL DEFAULT 'E',
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "birthday" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("USER_ID")
);

-- CreateTable
CREATE TABLE "Racket" (
    "RACKET_ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Racket_pkey" PRIMARY KEY ("RACKET_ID")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "control" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "design" INTEGER NOT NULL,
    "recommend" INTEGER NOT NULL,
    "review" INTEGER NOT NULL,
    "RACKET_ID" INTEGER NOT NULL,
    "USER_ID" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Racket_name_key" ON "Racket"("name");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_RACKET_ID_fkey" FOREIGN KEY ("RACKET_ID") REFERENCES "Racket"("RACKET_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "USER"("USER_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
