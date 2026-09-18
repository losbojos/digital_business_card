import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dataPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'prisma',
  'data.json',
);

export async function initData(prisma: PrismaClient) {
  if (await prisma.profile.findFirst()) {
    console.log("init data already exists");
    return;
  }

  const data = JSON.parse(readFileSync(dataPath, 'utf8'));

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
