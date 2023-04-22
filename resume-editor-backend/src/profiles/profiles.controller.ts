import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from '@/profiles/profiles.service';
import { GetAllResponse } from '@/types/response/GetAllResponse';
import { GetResponse } from '@/types/response/GetResponse';
import { Profile } from '@/types/Profile';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  async getProfiles(): Promise<GetAllResponse<Profile>> {
    return this.profilesService.getProfiles();
  }

  @Get(':profileId')
  async getProfile(@Param() { profileId }): Promise<GetResponse<Profile>> {
    return this.profilesService.getProfile(profileId);
  }
}
