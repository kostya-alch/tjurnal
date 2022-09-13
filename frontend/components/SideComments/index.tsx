import React, { FC } from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import { CommentItem } from '../CommentItem/';

import styles from './SideComments.module.scss';

export const comments = [
  {
    id: 1,
    user: {
      fullName: 'Вася Пупкин',
      avatarUrl:
        'https://avatars.mds.yandex.net/i?id=4244360699bdbcc1271a88a804f8c7be_l-4304678-images-thumbs&n=13',
    },
    createdAt: new Date().toString(),
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    id: 2,
    user: {
      fullName: 'Вася Пупкин',
      avatarUrl:
        'https://avatars.mds.yandex.net/i?id=4244360699bdbcc1271a88a804f8c7be_l-4304678-images-thumbs&n=13',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    user: {
      fullName: 'Вася Пупкин',
      avatarUrl:
        'https://avatars.mds.yandex.net/i?id=4244360699bdbcc1271a88a804f8c7be_l-4304678-images-thumbs&n=13',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toString(),
  },
];

export const SideComments: FC = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {comments.map((obj) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
