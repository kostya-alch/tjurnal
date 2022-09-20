import { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

interface LoginProps {
  onOpenLogin: () => void;
}

export const Login: FC<LoginProps> = ({ onOpenLogin }) => {
  return (
    <div>
      <form>
        <TextField
          className={'mb-15'}
          required
          variant={'outlined'}
          fullWidth
          type={'email'}
          size={'small'}
          label={'Email'}
        />
        <TextField
          className={'mb-15'}
          required
          variant={'outlined'}
          fullWidth
          type={'password'}
          size={'small'}
          label={'Пароль'}
        />
        <div className="d-flex align-center justify-between">
          <Button color={'primary'} variant={'contained'}>
            Войти
          </Button>
          <Button onClick={onOpenLogin} color={'primary'} variant={'text'}>
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
};
