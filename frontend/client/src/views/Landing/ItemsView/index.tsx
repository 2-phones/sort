import React, { useEffect } from 'react';
import * as S from './style';
import { RightIcon } from '../../../components/Icons/Icons';
import { BasicBtn } from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/common/redux.hook';
import LandingPostSkeleton from '../../../components/Loding/Skeleton/LandingPosts';

const ItemsView = ({ posts }: any) => {
  const navigate = useNavigate();
  const dummyData = useAppSelector((state) => state.posts.dummyData);
  return (
    <S.ItemsView_Container>
      <div className="Previe_title">최근상품</div>
      <S.PreviewList>
        {posts?.length
          ? posts.map((items) => {
              return (
                <S.ItemPreview key={items.post_id}>
                  <S.PreviewImg>
                    <img src={items.img_url} />
                  </S.PreviewImg>
                  <S.PreviewInfo>
                    <p className="title">{items.title}</p>
                    <S.PreviewPrice>
                      <p className="price">{items.price}</p>
                      <p className="won">원</p>
                    </S.PreviewPrice>
                  </S.PreviewInfo>
                </S.ItemPreview>
              );
            })
          : dummyData.slice(0, 5).map((li: number) => {
              return <LandingPostSkeleton key={li} />;
            })}
      </S.PreviewList>
      <S.AllviewBtn onClick={() => navigate('/main')}>
        <BasicBtn color="white" background="#363636">
          전체보기
          <RightIcon />
        </BasicBtn>
      </S.AllviewBtn>
    </S.ItemsView_Container>
  );
};

export default ItemsView;
