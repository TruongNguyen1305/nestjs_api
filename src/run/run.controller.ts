import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RunService } from './run.service';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiOkResponse, ApiBody, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { Run } from './entities/run.entity';

@Controller('run')
@ApiTags('Run')
export class RunController {
  constructor(private readonly runService: RunService) {}

  @ApiOperation({
    description: "Create a new run record.",
    summary: 'find all runs'
  })
  @ApiBody({
    description: 'data',
    type: CreateRunDto,
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Run,
  })
  @ApiBadRequestResponse({ description: 'Description is required',})
  @Post()
  create(@Body() createRunDto: CreateRunDto) {
    return this.runService.create(createRunDto);
  }









  @ApiOperation({
    description: "Retrieve all run records.",
    summary: "creata a new run and save to database",
  })
  @ApiOkResponse({
    description: 'Retrieve all run records successfully.',
    type: Run,
    isArray: true
  })
  @Get()
  findAll() {
    return this.runService.findAll();
  }







  @ApiOperation({
    description: "Retrieve a specific run record.",
    summary: "find specific run arcording to id",
  })
  @ApiOkResponse({
    description: 'Retrieve run record successfully.',
    type: Run,
  })
  @ApiNotFoundResponse({description: 'Run record not found.',})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runService.findOne(+id);
  }

  @ApiOperation({
    description: "Update a specific run record.",
    summary: "update specific run arcording to id"
  })
  @ApiBody({
    description: 'Field need to be updated',
    type: UpdateRunDto,
  })
  @ApiOkResponse({
    description: 'Update run record successfully.',
    type: Run,
  })
  @ApiBadRequestResponse({ description: 'Description is required', })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunDto: UpdateRunDto) {
    return this.runService.update(+id, updateRunDto);
  }

  @ApiOperation({
    description: "Delete a specific run record.",
    summary: "delete run arcording to id"
  })
  @ApiOkResponse({
    description: 'Delete run record successfully.',
    type: Run,
  })
  @ApiNotFoundResponse({ description: 'Run record not found.', })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runService.remove(+id);
  }
}

