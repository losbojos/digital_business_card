import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { ProfileService } from './profile/profile.service.js';
import { ProfileResolver } from './profile/profile.resolver.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SeedService } from './seed.service.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [PrismaService, ProfileService, ProfileResolver, SeedService],
})
export class AppModule {}
