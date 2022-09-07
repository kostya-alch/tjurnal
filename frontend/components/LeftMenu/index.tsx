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

export const LeftMenu: FC = () => {
  const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/' },
    { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/' },
    { text: 'Подписки', icon: <SubscribeIcon />, path: '/' },
  ];

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Button>
              {obj.icon}
              {obj.text}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
