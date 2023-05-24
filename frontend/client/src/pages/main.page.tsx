import Header from '@/components/Header/header.component';
import PostFilter from '@/components/MainPost/postFilter.component';
import PostList from '@/components/MainPost/postList.component';

const MainPage = () => {
  return (
    <div>
      <PostFilter />
      <PostList />
    </div>
  );
};

export default MainPage;
