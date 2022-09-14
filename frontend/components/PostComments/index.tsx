import { FC, useState } from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
import data from '../../mock/data.json';

export const PostComments: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];
  return (
    <Paper elevation={0} className={'mt-40 p-30'}>
      <div className="container">
        <Typography variant={'h6'}>42 комментария</Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className={'mb-20'} />
        {comments.map((obj) => (
          <Comment user={obj.user} createdAt={obj.createdAt} text={obj.text} key={obj.id} />
        ))}
      </div>
    </Paper>
  );
};
