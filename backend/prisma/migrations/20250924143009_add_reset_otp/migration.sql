-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "resetOtp" TEXT,
ADD COLUMN     "resetOtpExpires" TIMESTAMP(3);
