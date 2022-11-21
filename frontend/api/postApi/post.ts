import { AxiosInstance } from 'axios';
import { CreatePostDto, PostItem } from './types';

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostItem>(`/posts`);
    return data;
  },
  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(`/posts`, dto);
    return data;
  },
});
