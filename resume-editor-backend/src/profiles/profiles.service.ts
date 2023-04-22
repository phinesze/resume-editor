import { Injectable } from '@nestjs/common';
import { profiles } from '@/_mocks/Profiles';
import { Profile } from '@/types/Profile';
import { GetAllResponse } from '@/types/response/GetAllResponse';
import { GetResponse } from '@/types/response/GetResponse';

@Injectable()
export class ProfilesService {
  async getProfiles(): Promise<GetAllResponse<Profile>> {
    const result = await profiles;
    return result
      ? { result, allCount: result.length }
      : { errors: ['not found'] };
  }

  async getProfile(profileId: string): Promise<GetResponse<Profile>> {
    const result = await profiles.find((profile) => profile.id === profileId);
    return result ? { result } : { errors: ['not found'] };
  }
}
