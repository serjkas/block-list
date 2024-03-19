import { ApiProperty } from '@nestjs/swagger';

export class SingUpDto {
  @ApiProperty({
    example: 'a@a.com',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class SingInDto {
  @ApiProperty({ example: 'a@a.com' })
  email: string;
  @ApiProperty({ example: 'aaa' })
  password: string;
}

export class GetSession {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  'iat': number;
  @ApiProperty()
  'exp': number;
}
