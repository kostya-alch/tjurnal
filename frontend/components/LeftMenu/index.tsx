import { FC } from 'react';
import { Button } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  MarkunreadOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  BrushOutlined as SubscribeIcon,
} from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './LeftMenu.module.scss';

export const LeftMenu: FC = () => {
  const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <SubscribeIcon />, path: '/follows' },
  ];

  const router = useRouter();

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                {obj.icon}
                {obj.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
