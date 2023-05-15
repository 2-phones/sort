import { mokup } from '@/assets/imgs/image';
import * as S from '@/styles/landingPage/serviceIntro.style';
import { useNavigate } from 'react-router-dom';

const ServiceIntro = () => {
  const navigate = useNavigate();

  return (
    <S.ServiceIntroLayOut>
      <S.IntroBox>
        <S.IntroTextSection>
          <S.Title>
            <h2>SELL OWN REGION TICKET</h2>
          </S.Title>
          <S.SubTitle>
            <p className="service_intro">올바른 티켓의 시작</p>
            <p className="description">지역인증 기반 티켓 중고 거래</p>
          </S.SubTitle>
          <S.Button onClick={() => navigate('/main')}>거래하러 가기</S.Button>
        </S.IntroTextSection>
        <S.IntroImageSection>
          <img src={mokup} />
        </S.IntroImageSection>
      </S.IntroBox>
    </S.ServiceIntroLayOut>
  );
};

export default ServiceIntro;
