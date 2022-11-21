import { OutputData } from '@editorjs/editorjs';

export type CreatePostDto = {
  title: string;
  body: OutputData['blocks'];
};

export type PostItem = {
  title: string;
  body: OutputData['blocks'];
  tags: null | string;
  id: number;
  views: number;
  createdAt: string;
  updatedAt: string;
};
