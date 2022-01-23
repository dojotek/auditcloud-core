import { CreateProjectInput } from './create-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field(() => Int, { description: 'Name of project' })
  id: number;

  @Field({ description: 'Name of project' })
  name: string;
}
