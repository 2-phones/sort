import { LoginDto } from 'src/dto/auth/login.dto';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export const getSocialData = async (data: LoginDto) => {
  const { access_token } = data;

  return data.social_type === 'naver'
    ? await naverAPI(access_token)
    : await kakaoAPI(access_token);
};

const naverAPI = async (access_token: string) => {
  try {
    const result = await axios.get(process.env.NAVERURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return result.data.response;
  } catch (err) {
    return err;
  }
};

const kakaoAPI = async (access_token: string) => {
  try {
    const result = await axios.get(process.env.KAKAOURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return result.data;
  } catch (err) {
    return err;
  }
};
