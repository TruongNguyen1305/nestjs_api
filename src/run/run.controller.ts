import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RunService } from './run.service';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('run')
@ApiTags('Run')
export class RunController {
  constructor(private readonly runService: RunService) {}

  @ApiOperation({description: "Create a new run record."})
  @Post()
  create(@Body() createRunDto: CreateRunDto) {
    return this.runService.create(createRunDto);
  }

  @ApiOperation({description: "Retrieve all run records."})
  @Get()
  findAll() {
    return this.runService.findAll();
  }

  @ApiOperation({description: "Retrieve a specific run record."})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runService.findOne(+id);
  }

  @ApiOperation({description: "Update a specific run record."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunDto: UpdateRunDto) {
    return this.runService.update(+id, updateRunDto);
  }

  @ApiOperation({description: "Delete a specific run record."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runService.remove(+id);
  }
}

