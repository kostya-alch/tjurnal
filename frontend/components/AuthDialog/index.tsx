import { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import { ArrowBackIos as ArrowIcon } from '@material-ui/icons';

import styles from './AuthDialog.module.scss';
import { Main } from './forms/Main';
import { Login } from './forms/Login';
import { Register } from './forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  authVisible: boolean;
}

export const AuthDialog: FC<AuthDialogProps> = ({ onClose, authVisible }) => {
  const [authType, setAuthType] = useState<'main' | 'login' | 'register'>('main');
  return (
    <Dialog
      maxWidth={'xs'}
      fullWidth
      open={authVisible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {authType === 'main' ? (
                'Войти в TJurnal'
              ) : (
                <p onClick={() => setAuthType('main')} className={styles.backButton}>
                  <ArrowIcon />
                  {authType === 'login' ? 'Войти через почту' : 'Зарегистрироваться'}
                </p>
              )}
            </Typography>
            {authType === 'main' && <Main onOpenLogin={() => setAuthType('login')} />}
            {authType === 'login' && <Login onOpenLogin={() => setAuthType('register')} />}
            {authType === 'register' && (
              <Register
                onOpenRegister={() => setAuthType('register')}
                onOpenLogin={() => setAuthType('login')}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
