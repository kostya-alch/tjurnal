import * as yup from 'yup';
import { LoginSchema } from './loginSchemaValidation';

export const RegisterSchema = yup
  .object()
  .shape({
    fullname: yup.string().min(2, 'Введите имя и фамилию').required('Имя и фамилия обязательны'),
  })
  .concat(LoginSchema);
