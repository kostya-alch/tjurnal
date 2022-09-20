import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  fullname: yup.string().min(2, 'Введите имя и фамилию').required('Имя и фамилия обязательны'),
  email: yup.string().email('Неверная почта').required('Почта обязательная'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .required('Пароль обязательный'),
});
