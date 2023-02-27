/*
  Warnings:

  - You are about to drop the `Verification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Verification";

-- CreateTable
CREATE TABLE "VERIFICATION" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VERIFICATION_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VERIFICATION_token_key" ON "VERIFICATION"("token");
