import { FC } from 'react';
import styles from './LeftMenu.module.scss';
import { Button, Paper, Typography } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  MarkunreadOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  BrushOutlined as SubscribeIcon,
} from '@material-ui/icons';
import Image from 'next/image';
import Link from 'next/link';

export const LeftMenu: FC = () => {
  const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <SubscribeIcon />, path: '/follows' },
  ];

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <Button>
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
