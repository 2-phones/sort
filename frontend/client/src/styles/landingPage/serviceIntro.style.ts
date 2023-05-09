import { styled } from '@/styles/global.style';

const ServiceIntroLayOut = styled.section`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const IntroBox = styled.div`
  width: 1000px;
  height: 800px;
  display: flex;
  position: relative;
  padding: 50px;
`;
const IntroTextSection = styled.section`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
`;

const Title = styled.header`
  width: 100%;
  height: 50%;
  h2 {
    font-family: HelveticaNeueBold;
    font-size: 90px;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: 1.5px;
    width: 258px;
    position: absolute;
    animation: slide 2s ease-out;
    @keyframes slide {
      from {
        left: 150px;
        opacity: 0;
      }
      to {
        left: 50px;
        opacity: 1;
      }
    }

    @media only screen and (max-width: 960px) {
      font-size: 5.2rem;

      @keyframes slide {
        from {
          left: -400px;
          opacity: 0;
        }
        to {
          left: 50px;
          opacity: 1;
        }
      }
    }
  }
`;

const SubTitle = styled.section`
  width: 100%;
  height: 50%;
  p {
    margin-top: 20px;
  }
  .service_intro {
    font-size: 30px;
  }
  .description {
    color: gray;
  }
`;

const IntroImageSection = styled.section`
  width: 800px;
  height: 800px;
  overflow: hidden;
  position: absolute;
  right: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 280px;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: black;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export { ServiceIntroLayOut, IntroBox, Title, SubTitle, IntroTextSection, IntroImageSection, Button };
