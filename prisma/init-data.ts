import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";


const prisma = new PrismaClient();

async function main() {
  if (await prisma.profile.findFirst()) {
    console.log("init data already exists");
    return;
  }

  const data = JSON.parse(readFileSync('prisma/data.json', 'utf-8'));

  await prisma.profile.create({
    data:
    {
      name: data.name,
      description: data.description,
      links: {create: data.links},
      skills: {
        create: data.skills.map((skil: string) => ({name: skil}))
      },

      experience: {create: data.experience},
      projects: {create: data.projects},
    }
  });

  console.log("init data created");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());