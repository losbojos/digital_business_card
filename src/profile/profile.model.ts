import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileLink {

  @Field(() => Int)
  id: number;

  @Field()
  label: string;

  @Field()
  url: string;
}

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class Experience {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  periodStart: string

  @Field(() => String, { nullable: true })
  periodEnd: string

  @Field(() => [String])
  achievements: string[];
}

@ObjectType()
export class Project {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field(() => String, { nullable: true })
  note: string;
}

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [ProfileLink])
  links: ProfileLink[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
