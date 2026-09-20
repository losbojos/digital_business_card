import { PrismaClient } from '@prisma/client';
import { initData } from '../src/seed/init-data.js';

const prisma = new PrismaClient();

initData(prisma)
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
