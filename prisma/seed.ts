import { PrismaClient } from "@prisma/client";
import seeds from "./utils";
const prisma = new PrismaClient();

async function main() {
  await seeds.seedMoods();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
