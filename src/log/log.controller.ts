import { Controller, Post, Put } from '@nestjs/common';

@Controller('run')
export class RunController {
    constructor(private runService: RunService) {}

    @Post('addrun')
    addrun() {


    }

    @Post('editrun')
    editrun() {
        
    }

    @Post('deleterun')
    deleterun() {
        
    }

}
