import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function seedHour() {
  await prisma.classtime.createMany({
    data: [
      {
        hour: "8:00",
      },
      {
        hour: "10:00",
      },
      {
        hour: "14:00",
      },
      {
        hour: "16:00",
      },
    ],
  });
}

async function seedWeekday() {
  await prisma.weekday.createMany({
    data: [
      {
        name: "Mon",
      },
      {
        name: "Tue",
      },
      {
        name: "Wed",
      },
      {
        name: "Thu",
      },
      {
        name: "Fri",
      },
      {
        name: "Sat",
      },
    ],
  });
}

async function seedNivel() {
  await prisma.nivel.createMany({
    data: [
      {
        name: "0",
      },
      {
        name: "1",
      },
      {
        name: "2",
      },
      {
        name: "3",
      },
    ],
  });
}

async function seed() {

  const getHour = await prisma.classtime.findMany();
  const getWeekday = await prisma.weekday.findMany();
  const getNivel = await prisma.nivel.findMany();

  getHour.length === 0 ? await seedHour() : null;

  getWeekday.length === 0 ? await seedWeekday() : null;
  
  getNivel.length === 0 ? await seedNivel() : null;
}
async function main() {
  return seed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
