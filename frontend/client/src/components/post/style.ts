import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 1px 1px lightgray;
  border-radius: 10px;
`;

const ImgSection = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  p {
    margin: 10px 10px;
  }
  .price {
    font-size: 13px;
  }
  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export { Container, ImgSection, Description };
