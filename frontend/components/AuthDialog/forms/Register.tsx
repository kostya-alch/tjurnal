import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '../../../utils/schemas/RegisterSchemaValidation';
import { FormField } from '../../FormField';
import { CreateUserDto } from '../../../api/types';
import { UserApi } from '../../../api';
import { setCookie } from 'nookies';
import { Alert } from '@material-ui/lab';
import { useAppDispatch } from '../../../store/hooks';
import { setUserData } from '../../../store/slices/user/user';

interface LoginFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const Register: React.FC<LoginFormProps> = ({ onOpenRegister, onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const response = await UserApi.register(dto);
      setCookie(null, 'authToken', response.token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      setErrorMessage('');
      dispatch(setUserData(response));
    } catch (e) {
      console.log(e.response.data.message);
      if (e.response) setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        {errorMessage && (
          <Alert className="mb-20" severity="error">
            {errorMessage}
          </Alert>
        )}
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
