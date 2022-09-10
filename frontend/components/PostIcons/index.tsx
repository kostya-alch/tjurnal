import { IconButton } from '@material-ui/core';
import {
  BookmarkBorderOutlined as FavouriteIcon,
  ModeCommentOutlined as CommentIcon,
  RepeatOutlined as RepostIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';
import { FC } from 'react';

import styles from '../Post/Post.module.scss';

export const PostIcons: FC = () => {
  return (
    <ul className={styles.actions}>
      <li>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavouriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
