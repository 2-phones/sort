import { styled } from '@/styles/global.style';

const CommonStyle = styled.div`
  width: 80%;
  display: flex;
`;

const FooterLayOut = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterBox = styled(CommonStyle)`
  height: 150px;
  margin-top: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`;

const FooterNav = styled.div`
  width: 300px;
  height: 180px;
  ul {
    list-style: none;
    font-size: 12px;
    margin-top: 20px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #9e9e9e;
  }
`;

const FooterBottomBox = styled(CommonStyle)`
  height: 70px;
`;

const DescriptionStyle = styled.section`
  padding: 20px 0;
  display: flex;
  p {
    color: #808080;
    font-size: 10px;
  }
`;

const FooterDescriptionLeft = styled(DescriptionStyle)`
  padding: 20px 0;
  width: 90%;
  p {
    width: 456px;
  }
`;

const FooterDescriptionRight = styled(DescriptionStyle)`
  padding: 20px 0;
  justify-content: space-between;
  width: 10%;

  .madein {
    color: black;
  }
`;

export { FooterLayOut, FooterBox, FooterBottomBox, FooterNav, FooterDescriptionLeft, FooterDescriptionRight };
