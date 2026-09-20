import { ProfileService } from './profile.service.js';
import { Experience, Profile, ProfileLink, Project, Skill } from './profile.model.js';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.profileService.findOne();
  }

  @ResolveField(() => [ProfileLink])
  links(@Parent() profile: Profile) {
    return this.profileService.findLinks(profile.id);
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    return this.profileService.findSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile) {
    return this.profileService.findExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    return this.profileService.findProjects(profile.id);
  }
}
