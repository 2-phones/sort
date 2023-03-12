import React from 'react';
import { Detail_Seller, SellerTitle, SellerInfo, SellInfoBox, SellerBtn } from './style';
import { CheckIcon } from '../../../../components/Icons/Icons';
import { BasicBtn } from '../../../../components/Button/Button';

const ItemSeller = () => {
  return (
    <Detail_Seller>
      <SellerTitle>판매자</SellerTitle>
      <SellerInfo>
        <div className="img">
          <img src="https://i.pinimg.com/474x/07/08/ff/0708ff1a9c43249e39813d1c262adb34--amumu-league-of-legends-league-of-legends-tattoo.jpg" />
          <p className="seller_name">최붕대 님</p>
        </div>
        <SellInfoBox>
          <div className="rating_info">
            <p>★★★★★</p>
            <p>상품</p>
            <p>10</p>
            <p>후기</p>
            <p>22</p>
          </div>
          {/* <div className="area_auth">
            <p>
              <CheckIcon />
            </p>
            <p>지역인증 완료</p>
          </div> */}
        </SellInfoBox>
      </SellerInfo>
      <SellerBtn>
        <BasicBtn width="49%">판매자보기</BasicBtn>
        <BasicBtn width="49%">신고하기</BasicBtn>
      </SellerBtn>
    </Detail_Seller>
  );
};

export default ItemSeller;
