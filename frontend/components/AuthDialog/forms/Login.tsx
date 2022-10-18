import { FC, useState } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../utils/schemas/loginSchemaValidation';
import { FormField } from '../../FormField';
import { Alert } from '@material-ui/lab';
import { UserApi } from '../../../api';
import { setCookie } from 'nookies';
import { LoginDto } from '../../../api/types';

interface LoginProps {
  onOpenRegister: () => void;
}

export const Login: FC<LoginProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const response = await UserApi.login(dto);
      setCookie(null, 'authToken', response.token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      setErrorMessage('');
    } catch (e) {
      console.log(e.response.data.message);
      if (e.response) setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          {errorMessage && (
            <Alert className="mb-20" severity="error">
              {errorMessage}
            </Alert>
          )}
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
              color="primary"
              variant="contained"
            >
              Войти
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
