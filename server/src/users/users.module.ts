import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { UsersService } from './users.service';

@Module({
  imports: [DbModule],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
