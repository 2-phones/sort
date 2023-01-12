import React from 'react';
import { useNavigate } from 'react-router-dom';
import SoldOut from '../../SoldOut';
import { ItemBox, ItemImg, ItemTitle, ItemPrice, SellInfo } from './style';

const Iteminfo = ({ post_id, title, price, region, createdDate, img_url, status }) => {
  const navigate = useNavigate();
  console.log(post_id);
  return (
    <ItemBox onClick={() => navigate(`/main/detail/${post_id}`)}>
      {status === '판매완료' ? <SoldOut /> : null}
      <ItemImg>
        <img src={img_url} />
      </ItemImg>
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>
        <p className="price_data">{price}</p>
        <p>원</p>
      </ItemPrice>
      <SellInfo>
        <p className="sell_area">{region}</p>
        <p className="posted_date">{createdDate}</p>
      </SellInfo>
    </ItemBox>
  );
};

export default Iteminfo;
