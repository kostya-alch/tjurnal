import { FC } from 'react';
import { Avatar, Button, IconButton, Paper } from '@material-ui/core';
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/Textsms';
import NotificationIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/icons/Menu';
import { KeyboardArrowDownOutlined as ArrowBottom } from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: FC = () => {
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

        <Button className={styles.penButton} variant="contained">
          <CreateIcon />
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          {' '}
          <NotificationIcon />
        </IconButton>
        <Link href="/Profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Kostya"
              src="https://avatars.mds.yandex.net/i?id=4244360699bdbcc1271a88a804f8c7be_l-4304678-images-thumbs&n=13"
            />
            <ArrowBottom />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
