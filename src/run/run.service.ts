import { Injectable } from '@nestjs/common';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';

@Injectable()
export class RunService {
  create(createRunDto: CreateRunDto) {
    return 'This action adds a new run';
  }

  findAll() {
    return `This action returns all run`;
  }

  findOne(id: number) {
    return `This action returns a #${id} run`;
  }

  update(id: number, updateRunDto: UpdateRunDto) {
    return `This action updates a #${id} run`;
  }

  remove(id: number) {
    return `This action removes a #${id} run`;
  }
}
