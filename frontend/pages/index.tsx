import { Post } from '../components/Post';
import { MainLayout } from '../layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}
