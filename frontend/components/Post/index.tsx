import { FC } from 'react';

import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { PostIcons } from '../PostIcons';

import styles from './Post.module.scss';

export const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20 mb-25">
      <Typography variant={'h5'} className={styles.title} classes={{ root: styles.paper }}>
        <Link href={'/news/test-123'}>
          ЦБ ограничит продажу неквалифицированным инвесторам бумаг недружественных стран
        </Link>
      </Typography>
      <Typography className="mb-15 mt-15">
        По данным ЦБ, зарубежные финансовые институты могут заблокировать возможность работы с
        ценными бумагами, что принесет потери для российских инвесторов, передает пресс-служба.
      </Typography>
      <Image
        src="https://avatars.mds.yandex.net/i?id=107b63c34e7b49df6f1079e54c1c22e7-5870396-images-thumbs&n=13&exp=1"
        height={500}
        width={600}
      />
      <PostIcons />
    </Paper>
  );
};
