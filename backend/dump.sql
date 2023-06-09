CREATE TABLE "User"(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE "Nivel"(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE
);
CREATE TABLE "Classtime"(
    id int NOT NULL PRIMARY KEY,
    hour DATE NOT NULL,
    dayweek VARCHAR(255) NOT NULL
);
CREATE TABLE "Student"(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age int NOT NULL,
    observation VARCHAR(255),
    "nivelId" int NOT NULL,
    "classTimeId" int NOT NULL,
    FOREIGN KEY ("classTimeId") REFERENCES "Classtime"(id),
    FOREIGN KEY ("nivelId") REFERENCES "Nivel"(id),
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE "Unit"(
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    "nivelId" int NOT NULL,
    "studentId" int NOT NULL,
    FOREIGN KEY ("nivelId") REFERENCES "Nivel"(id),
    FOREIGN KEY ("studentId") REFERENCES "Student"(id)
);

CREATE TABLE "FinishedUnit"(
    id int NOT NULL PRIMARY KEY,
    "unitId" int NOT NULL,
    "studentId" int NOT NULL,
    FOREIGN KEY ("unitId") REFERENCES "Unit"(id),
    FOREIGN KEY ("studentId") REFERENCES "Student"(id)
);

CREATE TABLE "Observation"(
    id int NOT NULL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    "studentId" int NOT NULL,
    FOREIGN KEY ("studentId") REFERENCES "Student"(id)
);