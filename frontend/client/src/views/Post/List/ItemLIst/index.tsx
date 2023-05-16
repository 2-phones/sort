import React, { useState } from 'react';
import { ItemContainer, ViewsBox, ItemListBox, ItemWrapper } from './style';
import { calculateDate } from '../../../../util/calculateDate';
import Iteminfo from '../Info/index';
import PostSkeleton from '../../../../components/Loding/Skeleton/POSTS/index';
import { useAppSelector } from '../../../../hooks/common/redux.hook';

const ItemList = ({ posts, dummyData }: any) => {
  const { sellType } = useAppSelector((state) => state.posts);
  return (
    <ItemContainer>
      <ViewsBox>
        <div>{posts?.length} views</div>
      </ViewsBox>
      <ItemListBox>
        {posts?.length
          ? posts
              .filter((dataList) => (sellType === '전체' ? true : dataList.status === sellType))
              .map((dataList) => {
                const dateResult = calculateDate(dataList.created_at);
                return (
                  <ItemWrapper key={dataList.post_id}>
                    <Iteminfo
                      img_url={dataList.img_url}
                      post_id={dataList.post_id}
                      title={dataList.title}
                      price={dataList.price}
                      region={dataList.region}
                      createdDate={dateResult}
                      status={dataList.status}
                    />
                  </ItemWrapper>
                );
              })
          : dummyData.map((li: number) => {
              return <PostSkeleton key={li} />;
            })}
      </ItemListBox>
    </ItemContainer>
  );
};

export default ItemList;
