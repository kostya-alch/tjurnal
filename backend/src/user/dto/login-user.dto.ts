import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'Неверно введена почта' })
  email?: string;

  @Length(6, 30, { message: 'Пароль должен быть минимум шесть символов' })
  password?: string;
}
