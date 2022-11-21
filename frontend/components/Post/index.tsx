import { FC } from 'react';

import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { PostIcons } from '../PostIcons';

import styles from './Post.module.scss';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: FC<PostProps> = ({ imageUrl, title, description, id }) => {
  return (
    <Paper elevation={0} className="p-20 mb-25">
      <Typography variant={'h5'} className={styles.title} classes={{ root: styles.paper }}>
        <Link href={`/news/${id}`}>{title}</Link>
      </Typography>
      <Typography className="mb-15 mt-15">{description}</Typography>
      {imageUrl && <Image src={imageUrl} height={500} width={600} alt={title} />}
      <PostIcons />
    </Paper>
  );
};
