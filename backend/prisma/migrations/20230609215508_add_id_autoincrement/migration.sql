-- AlterTable
CREATE SEQUENCE "classtime_id_seq";
ALTER TABLE "Classtime" ALTER COLUMN "id" SET DEFAULT nextval('classtime_id_seq');
ALTER SEQUENCE "classtime_id_seq" OWNED BY "Classtime"."id";

-- AlterTable
CREATE SEQUENCE "finishedunit_id_seq";
ALTER TABLE "FinishedUnit" ALTER COLUMN "id" SET DEFAULT nextval('finishedunit_id_seq');
ALTER SEQUENCE "finishedunit_id_seq" OWNED BY "FinishedUnit"."id";

-- AlterTable
CREATE SEQUENCE "nivel_id_seq";
ALTER TABLE "Nivel" ALTER COLUMN "id" SET DEFAULT nextval('nivel_id_seq');
ALTER SEQUENCE "nivel_id_seq" OWNED BY "Nivel"."id";

-- AlterTable
CREATE SEQUENCE "observation_id_seq";
ALTER TABLE "Observation" ALTER COLUMN "id" SET DEFAULT nextval('observation_id_seq');
ALTER SEQUENCE "observation_id_seq" OWNED BY "Observation"."id";

-- AlterTable
CREATE SEQUENCE "student_id_seq";
ALTER TABLE "Student" ALTER COLUMN "id" SET DEFAULT nextval('student_id_seq');
ALTER SEQUENCE "student_id_seq" OWNED BY "Student"."id";

-- AlterTable
CREATE SEQUENCE "unit_id_seq";
ALTER TABLE "Unit" ALTER COLUMN "id" SET DEFAULT nextval('unit_id_seq');
ALTER SEQUENCE "unit_id_seq" OWNED BY "Unit"."id";

-- AlterTable
CREATE SEQUENCE "user_id_seq";
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE "user_id_seq" OWNED BY "User"."id";
