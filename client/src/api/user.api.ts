import { UserAPI } from './../config/api.config';
export const getUser = async (access_token: string) => {
  return await UserAPI.get('profile', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
