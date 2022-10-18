import axios from 'axios';
import { CreateUserDto, LoginDto, ResponseCreateUser } from './types';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:4200/',
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<ResponseCreateUser> {
    const { data } = await instanceAxios.post<CreateUserDto, { data: ResponseCreateUser }>(
      'auth/register',
      dto,
    );
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instanceAxios.post('auth/login', dto);
    return data;
  },
};
