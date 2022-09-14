import { MainLayout } from '../../layout/MainLayout';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { FullPost } from '../../components/FullPost';
import { Comment } from '../../components/Comment';
import { PostComments } from '../../components/PostComments';

export default function Post(): JSX.Element {
  return (
    <MainLayout contentFullWidth className={'mb-50'}>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
