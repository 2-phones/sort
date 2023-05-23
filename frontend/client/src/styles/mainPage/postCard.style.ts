import { styled } from '@/styles/global.style';

const PostCardLayOut = styled.main`
  width: 260px;
  height: 340px;
  box-shadow: 1px 2px 2px 2px #c2c2c2;
  border-radius: 5px;
  margin: 20px 10px;
`;

const PostImgSection = styled.section`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const PostInfoSection = styled.section`
  padding: 8px;
  h3 {
    font-size: 20px;
  }
  p {
    margin-top: 8px;
    font-size: 13px;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  .post_date {
    width: 50px;
    text-align: center;
    margin-left: 10px;
    border-left: 1px solid #d9d9d9;
  }
`;

export { PostCardLayOut, PostImgSection, PostInfoSection, InfoBottom };
