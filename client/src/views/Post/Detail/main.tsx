import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail_Container, Detail_Section } from './mainStyle';
import ItemCategory from './Category/index';
import DetailImg from './detailImg';
import DetailItemInfo from './postInfo/index';
import ImgList from './ImgList';
import { Description, ItemSubInfo } from './Description/index';
import ItemSeller from './Seller/index';
import SellerReview from './SellerReview';
import { calculateDate } from '../../../util/calculateDate';
import { getDetail } from '../../../util/requestItem';

const DetailMain = () => {
  const { id } = useParams();
  const itemData = getDetail(id)[0];
  const detailPageDate = calculateDate(itemData?.created_date);

  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg img_url={itemData?.img_url} />
        <DetailItemInfo
          title={itemData?.title}
          price={itemData?.price}
          createdDate={itemData?.detailPageDate}
          endDate={itemData?.end_date}
          seat={itemData?.seat_number}
          region={itemData?.region}
        />
        <ImgList img_url={itemData?.img_url} />
        <Description description={itemData?.body} />
        <ItemSeller />
        <ItemSubInfo region={itemData?.region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
