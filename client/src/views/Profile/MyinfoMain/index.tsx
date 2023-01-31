import React from 'react';
import * as S from './style';
import SubPostComponent from '../../../components/post/subPost';

const MyinfoMain = ({ profile, posts }: any) => {
  return (
    <S.Container>
      <S.UserContainter>
        <S.UserUSer>
          <img src={profile?.profile_url} />
        </S.UserUSer>
        <S.UserInfo>
          <S.UserID>{profile?.user_name}</S.UserID>
          <S.UserEmail>{profile?.email}</S.UserEmail>
        </S.UserInfo>
      </S.UserContainter>
      <S.Posts>
        <S.Title>
          <p>최근 거래</p>
        </S.Title>
        <S.PostsBody>
          {!posts[0] ? (
            <S.PostsDefaultMsg>
              <p>사용하지 않는 티켓을 등록 해보세요!</p>
            </S.PostsDefaultMsg>
          ) : (
            posts.map((post: any) => {
              return (
                <S.PostContainer key={post.post_id}>
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
    </S.Container>
  );
};

export default MyinfoMain;
