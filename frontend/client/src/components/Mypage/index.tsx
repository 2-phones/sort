import React from 'react';
import * as S from './style';
import SubPostComponent from '../post/subPost';
import { useNavigate } from 'react-router-dom';

// 판매상품이 있을 때
const MypageCompoent = ({ posts, pagetitle, defaultMsg }: any) => {
  const navigate = useNavigate();
  const pageMove = (post_id: string) => {
    post_id ? navigate(`/main/detail/${post_id}`) : null;
  };
  return (
    <S.Container>
      <h2>{pagetitle}</h2>
      <S.Posts>
        <S.PostsBody>
          {!posts[0] ? (
            <S.PostsDefaultMsg>
              <p>{defaultMsg}</p>
            </S.PostsDefaultMsg>
          ) : (
            posts.map((post: any) => {
              return (
                <>
                  <S.PostContainer key={post?.post_id}>
                    <S.PostWrappper onClick={() => pageMove(post?.post_id)}></S.PostWrappper>
                    <SubPostComponent
                      post_id={post?.post_id}
                      img_url={post?.img_url}
                      status={post?.status}
                      title={post?.title}
                      price={post?.price}
                    />
                  </S.PostContainer>
                </>
              );
            })
          )}
        </S.PostsBody>
      </S.Posts>
    </S.Container>
  );
};

export default MypageCompoent;
