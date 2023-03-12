import React from 'react';
import { useNavigate } from 'react-router-dom';
import SoldOut from '../../views/Post/SoldOut';
import * as S from './style';

const SubPostComponent = ({ post_id, img_url, title, price, status }) => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(`/main/detail/${post_id}`)}>
      {status === '판매완료' ? <SoldOut /> : null}
      <S.ImgSection>
        <img src={img_url} />
      </S.ImgSection>
      <S.Description>
        <p className="title">{title}</p>
        <p className="price">{price} 원</p>
      </S.Description>
    </S.Container>
  );
};

export default SubPostComponent;
