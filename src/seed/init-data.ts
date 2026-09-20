import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const dataPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  'prisma',
  'data.json',
);

export async function initData(prisma: PrismaClient) {

  const raw = readFileSync(dataPath, 'utf8');
  const dataHash = createHash('sha256').update(raw).digest('hex');

  const existing = await prisma.profile.findFirst();
  if (existing?.dataHash === dataHash) {
    return;
  }

  if (existing) {
    await prisma.profile.delete({ where: { id: existing.id } });
  }  

  const data = JSON.parse(raw);  
  
  await prisma.profile.create({
    data: {
      name: data.name,
      description: data.description,
      dataHash,
      links: { create: data.links },
      skills: {
        create: data.skills.map((skill: string) => ({ name: skill })),
      },
      experience: { create: data.experience },
      projects: { create: data.projects },
    },
  });

  console.log(existing ? 'data updated' : 'init data created');  
}
