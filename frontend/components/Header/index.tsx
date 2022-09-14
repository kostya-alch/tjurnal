import { FC, useState } from 'react';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
} from '@material-ui/core';
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/Textsms';
import NotificationIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/icons/Menu';
import { KeyboardArrowDownOutlined as ArrowBottom } from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <IconButton onClick={handleClickOpen}>
          <MessageIcon />
        </IconButton>
        <IconButton>
          {' '}
          <NotificationIcon />
        </IconButton>
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
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
