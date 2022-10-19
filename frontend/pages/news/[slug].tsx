import { MainLayout } from '../../layout/MainLayout';
import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';

export default function Post(): JSX.Element {
  return (
    <MainLayout contentFullWidth className={'mb-50'}>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
