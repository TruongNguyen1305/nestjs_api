import { ApiProperty } from '@nestjs/swagger';


export class CreateRunDto {
    @ApiProperty()
    description: string;
}
 