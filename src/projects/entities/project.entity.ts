import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field(() => Int, { description: 'ID dari project' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Nama dari project' })
  @Column({ length: 50 })
  name: string;
}
