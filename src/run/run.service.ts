import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { Run, runs } from './entities/run.entity';
@Injectable()
export class RunService {
  create(createRunDto: CreateRunDto) {
    if (!createRunDto.description) 
      throw new BadRequestException('Description is required');
  
    const run = new Run(createRunDto.description)
    
    runs.push(run)
    
    return run
  }

  findAll() {
    return runs
  }

  findOne(id: number) {
    const run = runs.find(run => run.id === id)
    if (!run){
      throw new NotFoundException("Run not found")
    }
    return run
  }

  update(id: number, updateRunDto: UpdateRunDto) {
    if (!updateRunDto.description)
      throw new BadRequestException('Description is required');

    const run = runs.find(run => run.id === id)

    run.description = updateRunDto.description
    run.time = new Date()
    
    console.log(runs)
    return run
  }

  remove(id: number) {
    const removeRun = runs.find(run => run.id === id)
    const removeIndex = runs.indexOf(removeRun)
    
    if (removeIndex > -1) { // only splice array when item is found
      runs.splice(removeIndex, 1); // 2nd parameter means remove one item only
    }
    else throw new NotFoundException("Run not found")

    return removeRun
  }
}
