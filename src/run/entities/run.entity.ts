import { ApiProperty } from '@nestjs/swagger';

export class Run {
    static count = 3;
    @ApiProperty()
    id: number;

    @ApiProperty()
    time: Date;

    @ApiProperty()
    description: string;

    constructor(description: string) {
        this.id = Run.count + 1;
        Run.count += 1;
        this.time = new Date();
        this.description = description;
    }
}



export const runs: Run[] = [
    {
        id: 1,
        time: new Date(),
        description: 'Running...'
    },
    {
        id: 2,
        time: new Date(),
        description: 'Event...'
    },
    {
        id: 3,
        time: new Date(),
        description: 'Running...'
    }
]
