import { IsEmail, Length } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(2)
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная введена почта' })
  email: string;

  @Length(6, 30, { message: 'Пароль должен быть минимум шесть символов' })
  password?: string;
}
