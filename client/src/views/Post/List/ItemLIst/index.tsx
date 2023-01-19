import React, { useState } from 'react';
import { ItemContainer, ViewsBox, ItemListBox } from './style';
import { calculateDate } from '../../../../util/calculateDate';
import { LodingMotion } from '../../../../components/Loding/LodingMotion';
import Iteminfo from '../Info/index';
import PostSkeleton from '../../../../components/Loding/Skeleton/Posts/index';

const ItemList = ({ posts, dummyData }: any) => {
  return (
    <ItemContainer>
      <ViewsBox>
        <div>{posts?.length} views</div>
      </ViewsBox>
      <ItemListBox>
        {posts
          ? posts.map((dataList) => {
              const dateResult = calculateDate(dataList.created_at);
              return (
                <Iteminfo
                  key={dataList.post_id}
                  img_url={dataList.img_url}
                  post_id={dataList.post_id}
                  title={dataList.title}
                  price={dataList.price}
                  region={dataList.region}
                  createdDate={dateResult}
                  status={dataList.status}
                />
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
