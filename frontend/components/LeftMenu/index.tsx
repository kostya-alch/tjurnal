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
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon /> Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon /> Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon /> Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <SubscribeIcon /> Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
