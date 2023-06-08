-- CreateTable
CREATE TABLE "Classtime" (
    "id" SERIAL NOT NULL,
    "hour" DATE NOT NULL,
    "dayweek" VARCHAR(255) NOT NULL,

    CONSTRAINT "Classtime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClasstimeStudent" (
    "id" SERIAL NOT NULL,
    "classtimeid" INTEGER NOT NULL,
    "studentid" INTEGER NOT NULL,

    CONSTRAINT "ClasstimeStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinishedUnit" (
    "id" SERIAL NOT NULL,
    "unitid" INTEGER NOT NULL,
    "studentid" INTEGER NOT NULL,

    CONSTRAINT "FinishedUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nivel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdat" DATE,
    "updatedat" DATE,

    CONSTRAINT "Nivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observation" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "studentid" INTEGER NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "nivelid" INTEGER NOT NULL,
    "observation" VARCHAR(255),
    "createdat" DATE,
    "updatedat" DATE,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "nivelid" INTEGER NOT NULL,
    "studentid" INTEGER NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdat" DATE,
    "updatedat" DATE,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStudent" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "studentid" INTEGER NOT NULL,

    CONSTRAINT "UserStudent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ClasstimeStudent" ADD CONSTRAINT "ClasstimeStudent_classtimeid_fkey" FOREIGN KEY ("classtimeid") REFERENCES "Classtime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ClasstimeStudent" ADD CONSTRAINT "ClasstimeStudent_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "FinishedUnit" ADD CONSTRAINT "FinishedUnit_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "FinishedUnit" ADD CONSTRAINT "FinishedUnit_unitid_fkey" FOREIGN KEY ("unitid") REFERENCES "Unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_nivelid_fkey" FOREIGN KEY ("nivelid") REFERENCES "Nivel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_nivelid_fkey" FOREIGN KEY ("nivelid") REFERENCES "Nivel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserStudent" ADD CONSTRAINT "UserStudent_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserStudent" ADD CONSTRAINT "UserStudent_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
