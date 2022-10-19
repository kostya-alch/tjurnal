import { Post } from '../components/Post';
import { MainLayout } from '../layout/MainLayout';
import { wrapper } from '../store/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../api/userApi';
import { setUserData } from '../store/slices/user/user';

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  try {
    const { authToken } = parseCookies(ctx);
    const userData = await UserApi.getMe(authToken);
    store.dispatch(setUserData(userData));
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
});
