import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('PROJECT_REPOSITORY')
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectInput: CreateProjectInput) {
    const project = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne(id);
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    this.projectRepository.update(id, { name: updateProjectInput.name });

    return this.projectRepository.findOne(id);
  }

  remove(id: number) {
    const project = this.projectRepository.findOne(id);
    this.projectRepository.delete(id);
    return project;
  }
}
