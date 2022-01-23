import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field({ description: 'Name of project' })
  name: string;
}
