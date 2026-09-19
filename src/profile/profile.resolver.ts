import { ProfileService } from './profile.service.js';
import { Profile } from './profile.model.js';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly service: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.service.findOne();
  }
}
