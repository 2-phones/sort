import React, { useEffect } from 'react';
import Lands from './style';
import { RightIcon } from '../../../components/Icons/Icons';
import { BasicBtn } from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/common/redux.hook';
import LandingPostSkeleton from '../../../components/Loding/Skeleton/LandingPosts';

const ItemsView = ({ posts }: any) => {
  const navigate = useNavigate();
  const dummyData = useAppSelector((state) => state.posts.dummyData);
  return (
    <Lands.ItemsView_Container>
      <div className="Previe_title">최근상품</div>
      <Lands.PreviewList>
        {posts
          ? posts.map((items) => {
              return (
                <Lands.ItemPreview key={items.post_id}>
                  <Lands.PreviewImg>
                    <img src={items.img_url} />
                  </Lands.PreviewImg>
                  <Lands.PreviewInfo>
                    <p className="title">{items.title}</p>
                    <Lands.PreviewPrice>
                      <p className="price">{items.price}</p>
                      <p className="won">원</p>
                    </Lands.PreviewPrice>
                  </Lands.PreviewInfo>
                </Lands.ItemPreview>
              );
            })
          : dummyData.slice(0, 5).map((li: number) => {
              return <LandingPostSkeleton key={li} />;
            })}
      </Lands.PreviewList>
      <Lands.AllviewBtn onClick={() => navigate('/main')}>
        <BasicBtn color="white" background="#363636">
          전체보기
          <RightIcon />
        </BasicBtn>
      </Lands.AllviewBtn>
    </Lands.ItemsView_Container>
  );
};

export default ItemsView;
