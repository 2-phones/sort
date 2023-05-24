import PostCard from './postCard.component';
import * as S from '@/styles/mainPage/postList.style';
import { Fragment } from 'react';

const PostList = () => {
  const posts = [0, 1, 2, 3];

  return (
    <S.PostListLayOut>
      <S.ListBox>
        {posts.map((post) => {
          return (
            <Fragment key={post}>
              <p className="post_views">{posts.length} views</p>
              <PostCard />
            </Fragment>
          );
        })}
      </S.ListBox>
      <S.MoreSection>
        <S.LoadMoreButton>
          <p>더보기</p>
        </S.LoadMoreButton>
      </S.MoreSection>
    </S.PostListLayOut>
  );
};

export default PostList;
