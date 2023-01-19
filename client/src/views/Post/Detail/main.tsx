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
import { useGetPostId } from '../../../hooks/usePosts.hook';
import SoldOut from '../SoldOut';

const DetailMain = () => {
  const { id } = useParams();
  const { post } = useGetPostId(id);
  const detailPageDate = calculateDate(post?.created_at);

  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg img_url={post?.img_url} SoldOut={post.status ? SoldOut : null} />
        <DetailItemInfo
          SoldOut={post.status ? SoldOut : null}
          title={post?.title}
          price={post?.price}
          createdDate={detailPageDate}
          endDate={post?.end_date}
          seat={post?.seat_number}
          region={post?.region}
        />
        <ImgList img_url={post?.img_url} />
        <Description description={post?.body} />
        <ItemSeller />
        <ItemSubInfo region={post?.region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
