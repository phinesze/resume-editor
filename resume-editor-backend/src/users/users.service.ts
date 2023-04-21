import { Injectable } from '@nestjs/common';
import { users } from '@/_mocks/Users';
import { GetResponse } from '@/types/response/GetResponse';
import { User } from '@/types/User';

@Injectable()
export class UsersService {
  async getUser(userId: string): Promise<GetResponse<User>> {
    const result = await users.find((user) => user.id === userId);
    return result ? { result } : { errors: ['not found'] };
  }
}
