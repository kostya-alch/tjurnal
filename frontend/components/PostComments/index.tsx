import { FC } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';

interface PostComments {
  items: Comment[];
}

type Comment = {
  text: string;
  id: number;
  createdAt: string;
  user: {
    fullName: string;
    avatarUrl: string;
  };
};

export const PostComments: FC<PostComments> = ({ items }) => {
  return (
    <Paper elevation={0} className={'mt-40 p-30'}>
      <Typography variant={'h6'}>42 комментария</Typography>
      <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
        <Tab label="Популярные" />
        <Tab label="По порядку" />
      </Tabs>
      <Divider />
      <div className={'mb-20'} />
      {items.map((obj) => (
        <Comment user={obj.user} createdAt={obj.createdAt} text={obj.text} key={obj.id} />
      ))}
    </Paper>
  );
};
