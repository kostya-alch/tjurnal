import { FC, useEffect, useState } from 'react';
import { Avatar, Button, IconButton, Paper } from '@material-ui/core';
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/Textsms';
import NotificationIcon from '@material-ui/icons/Notifications';
import { KeyboardArrowDownOutlined as ArrowBottom } from '@material-ui/icons';

import Menu from '@material-ui/icons/Menu';
import { AccountCircleOutlined as AccountIcon } from '@material-ui/icons';

import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../store/hooks';
import { selectUserData } from '../../store/slices/user/selectors/selector';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [authVisible, setAuthVisible] = useState<boolean>(false);
  const userData = useAppSelector(selectUserData);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <Menu />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className={styles.logo} src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder={'Поиск'} />
        </div>
        <Link href={'/write'}>
          <a>
            <Button className={styles.penButton} variant="contained">
              <CreateIcon />
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          {' '}
          <NotificationIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Kostya"
                src="https://avatars.mds.yandex.net/i?id=4244360699bdbcc1271a88a804f8c7be_l-4304678-images-thumbs&n=13"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <div onClick={openAuthDialog} className={styles.loginButton}>
            <AccountIcon /> Войти
          </div>
        )}
      </div>
      {authVisible && <AuthDialog onClose={closeAuthDialog} authVisible={authVisible} />}
    </Paper>
  );
};
