import React from 'react';
import * as S from './style';
import { BasicBtn } from '../../../components/Button/Button';
import SubPostComponent from '../../../components/post/subPost';

import {useAppSelector } from '../../../hooks/redux.hook';
import { useMyPost } from '../../../hooks/user/post.hook';

function MySell({ posts }: any) {
  const postID = useAppSelector((state) => state.user.postID);
  const { editPostHandler, deleteHandler, checkedHandler } = useMyPost();

  return (
    <S.Container>
      <h2>판매상품</h2>
      <S.Posts>
        <S.PostsBody>
          {!posts[0] ? (
            <S.PostsDefaultMsg>
              <p>사용하지 않는 티켓을 등록 해보세요!</p>
            </S.PostsDefaultMsg>
          ) : (
            posts.map((post: any) => {
              return (
                <S.PostContainer key={post.post_id}>
                  <S.PostWrappper onClick={() => checkedHandler(post.post_id)}>
                    <input checked={postID === post.post_id ? true : false} type="checkbox" readOnly />
                  </S.PostWrappper>
                  <SubPostComponent
                    post_id={post?.post_id}
                    img_url={post?.img_url}
                    status={post?.status}
                    title={post?.title}
                    price={post?.price}
                  />
                </S.PostContainer>
              );
            })
          )}
        </S.PostsBody>
      </S.Posts>
      <S.BtnSection>
        <S.AcitonBtn onClick={() => editPostHandler(postID)}>
          <BasicBtn background="black">상품 수정</BasicBtn>
        </S.AcitonBtn>
        <S.AcitonBtn onClick={() => deleteHandler()}>
          <BasicBtn background="black">상품 삭제</BasicBtn>
        </S.AcitonBtn>
      </S.BtnSection>
    </S.Container>
  );
}

export default MySell;
