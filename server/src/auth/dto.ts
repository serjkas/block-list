import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SingUpDto {
  @ApiProperty({
    example: 'a@a.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class SingInDto {
  @ApiProperty({ example: 'a@a.com' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: 'aaa' })
  @IsNotEmpty()
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
