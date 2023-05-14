import { styled } from '@/styles/global.style';

const CommonStyle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 80px;
  }
  p {
    margin: 50px;
  }
`;

const FeatureLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
`;

const FeatureBox = styled(CommonStyle)`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 400px;
`;

const FeatureItem = styled(CommonStyle)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 350px;
`;

export { FeatureLayout, FeatureBox, FeatureItem };
