export class Run {
    static count = 3;
    
    id: number;
    time: Date;
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
