import { MainLayout } from '../../layout/MainLayout';
import { Paper, Typography } from '@material-ui/core';
import { FullPost } from '../../components/FullPost';

export default function News() {
  return (
    <MainLayout contentFullWidth>
      <FullPost />
    </MainLayout>
  );
}
