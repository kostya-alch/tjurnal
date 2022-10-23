import { FC, useState } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../utils/schemas/loginSchemaValidation';
import { FormField } from '../../FormField';
import { Alert } from '@material-ui/lab';
import { UserApi } from '../../../api/userApi/user';
import { setCookie } from 'nookies';
import { LoginDto } from '../../../api/userApi/types';
import { useAppDispatch } from '../../../store/hooks';
import { setUserData } from '../../../store/slices/user/user';
import { Api } from '../../../api/userApi';

interface LoginProps {
  onOpenRegister: () => void;
}

export const Login: FC<LoginProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const response = await Api().user.login(dto);
      setCookie(null, 'authToken', response.token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      dispatch(setUserData(response));
      setErrorMessage('');
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response) setErrorMessage(error.response.data.message);
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
