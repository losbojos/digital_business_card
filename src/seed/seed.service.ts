import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { initData } from './init-data.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private prisma: PrismaService) {}

  async onApplicationBootstrap() {
    await initData(this.prisma);
  }
}
