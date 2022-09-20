import { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

interface RegisterProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const Register: FC<RegisterProps> = ({ onOpenRegister, onOpenLogin }) => {
  return (
    <div>
      <form>
        <TextField
          className={'mb-15'}
          required
          variant={'outlined'}
          fullWidth
          type={'text'}
          size={'small'}
          label={'Имя и фамилия'}
        />
        <TextField
          className={'mb-15'}
          required
          variant={'outlined'}
          fullWidth
          type={'email'}
          size={'small'}
          label={'Почта'}
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
            Регистрация
          </Button>
          <Button onClick={onOpenLogin} color={'primary'} variant={'text'}>
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};
