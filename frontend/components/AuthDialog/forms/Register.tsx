import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '../../../utils/schemas/RegisterSchemaValidation';
import { FormField } from '../../FormField';
import axios from 'axios';
import { CreateUserDto } from '../../../api/types';
import { UserApi } from '../../../api';

interface LoginFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const Register: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data: CreateUserDto) => {
    try {
      const response = await UserApi.register(data);
      console.log(response);
    } catch (e) {
      console.warn(`Ошибка при регистрации: ${e.data}`);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
