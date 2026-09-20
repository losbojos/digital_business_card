import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findOne() {
    return this.prisma.profile.findFirst();
  }

  findLinks(profileId: number) {
    return this.prisma.profileLink.findMany({ where: { profileId } });
  }

  findSkills(profileId: number) {
    return this.prisma.skill.findMany({ where: { profileId } });
  }

  findExperience(profileId: number) {
    return this.prisma.experience.findMany({ where: { profileId } });
  }

  findProjects(profileId: number) {
    return this.prisma.project.findMany({ where: { profileId } });
  }
}
