import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import { MoreHoriz as MoreIcon } from '@material-ui/icons';

import styles from './Comment.module.scss';

interface CommentProps {
  user?: {
    fullName: string;
  };
  text?: string;
}

export const Comment: FC<CommentProps> = ({ text, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
          alt="Avatar"
        />
        <b>Logan Poul</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        По словам Рогова, ВСУ пытается прощупать оборону и ищет место, где подразделения могут
        закрепиться на берегу и создать плацдарм для наступления.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
