import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import type { User } from '@prisma/client';
import { DbService } from './db/db.service';

class UsersDto {
  @ApiProperty()
  users: User[];
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @ApiResponse({
    type: UsersDto,
  })
  @Get()
  async getHello(): Promise<User[]> {
    return this.dbService.user.findMany();
  }
}
