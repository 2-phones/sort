import styled from 'styled-components';

//// 스켈레톤 컴포넌트
const ItemBox = styled.div`
  width: 200px;
  height: 240px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px lightgray;

  @media screen and (max-width: 620px) {
    width: 45%;
    height: 300px;
    margin: 10px 10px;
  }
  @media screen and (max-width: 600px) {
    width: 35%;
    height: 300px;
    margin: 10px 10px;
  }
  @media screen and (max-width: 450px) {
    width: 35%;
    height: 250px;
  }
`;

const ItemInfoOption = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const ItemImg = styled(ItemInfoOption)`
  width: 100%;
  height: 160px;
  background: var(--lightgray);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 620px) {
    height: 200px;
  }
  @media screen and (max-width: 450px) {
    height: 160px;
  }
`;

const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;
`;

const Shimmer = styled.div`
  width: 40%;
  height: 100%;
  transform: rotate(-45deg);
  background: #e3e3e3;
  box-shadow: 0 0 30px 30px #e3e3e3;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translate(400%);
    }
  }
`;

const Itemtext = styled.div`
  height: 20px;
  display: flex;
`;

const ItemTitle = styled(Itemtext)`
  margin-top: 20px;
  p {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 15px;
    background: var(--lightgray);
    border-radius: 10px;
    margin: 0px 10px;
  }
`;
const ItemPrice = styled(Itemtext)`
  margin-top: 15px;
  p {
    width: 40%;
    height: 15px;
    background: var(--lightgray);
    border-radius: 10px;
    margin: 0px 10px;
  }
`;
const SellInfo = styled(ItemPrice)`
  p {
    width: 70%;
    height: 15px;
    background: var(--lightgray);
    border-radius: 10px;
    margin: 0 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export { Shimmer, ShimmerWrapper, ItemBox, ItemImg, ItemTitle, ItemPrice, SellInfo };
