import React, { useState } from 'react';
import { ItemContainer, ViewsBox, ItemListBox } from './style';
import { calculateDate } from '../../../../util/calculateDate';
import { LodingMotion } from '../../../../components/Loding/LodingMotion';
import Iteminfo from '../info/index';

const ItemList = ({ itemsData, pageMove, isLoading }) => {
  return (
    <ItemContainer>
      <ViewsBox>
        <div>{itemsData.length} views</div>
      </ViewsBox>
      <ItemListBox>
        {itemsData &&
          itemsData.map((dataList) => {
            const dateResult = calculateDate(dataList.createdDate);
            return (
              <Iteminfo
                pageMove={pageMove}
                img_url={dataList.img_url}
                key={dataList.post_id}
                post_id={dataList.post_id}
                title={dataList.title}
                price={dataList.price}
                region={dataList.region}
                createdDate={dateResult}
              />
            );
          })}
      </ItemListBox>
      {isLoading ? <LodingMotion /> : null}
    </ItemContainer>
  );
};

export default ItemList;
