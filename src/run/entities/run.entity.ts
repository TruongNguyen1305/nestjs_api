export interface Run {
    id: number;
    time: Date;
    description: string;
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
