import React, { FC, useState } from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import { CommentItem } from '../CommentItem/';
import data from '../../mock/data.json';
import clsx from 'clsx';

import styles from './SideComments.module.scss';

export const SideComments: FC = () => {
  const [visibleComments, setVisibleComments] = useState<boolean>(true);

  const toggleComments = () => {
    setVisibleComments(!visibleComments);
  };

  return (
    <div className={clsx(styles.root, !visibleComments && styles.rotated)}>
      <h3 onClick={toggleComments}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visibleComments && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
