import { axiosInstance } from '.';

export const kakaoLogin = async () => {
  try {
    const res = await axiosInstance.get('/login/page');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};