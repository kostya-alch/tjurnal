import { Post } from '../components/Post';
import { MainLayout } from '../layout/MainLayout';
import { Api } from '../api';
import { NextPage } from 'next';
import { PostItem } from '../api/postApi/types';

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {posts.map((post) => (
        <Post title={post.title} id={post.id} description={post.body[0].data} key={post.id} />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
