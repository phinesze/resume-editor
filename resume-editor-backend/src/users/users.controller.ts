import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '@/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':userId')
  async getUser(@Param() { userId }): Promise<void> {
    this.userService.getUser(userId);
  }
}
