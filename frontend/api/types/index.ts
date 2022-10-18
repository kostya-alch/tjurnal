export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseCreateUser = {
  createdAt: string;
  updatedAt: string;
  email: string;
  fullName: string;
  password: string;
  id: number;
  token: string;
};
