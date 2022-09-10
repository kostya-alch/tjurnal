import React, { FC } from 'react';

import styles from '../SideComments/SideComments.module.scss';

interface CommentItemProps {
  user: {
    fullName: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img
          alt={'logo'}
          src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
        />
        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};
