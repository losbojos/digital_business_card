import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service.js";

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findOne() {
    return this.prisma.profile.findFirst({
      include: {  
        links: true,
        skills: true,
        experience: true,
        projects: true,
      },
    });
  }
}