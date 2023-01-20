import React from 'react';
import { MainContainer, MainContent, MainText, BoldText, SubText, SortLittle, SortMean, PP, AllviewBtn } from './style';
import { BasicBtn } from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Mokup } from '../../../components/Imgs/imgExport';
// import { RightIcon } from '../../Common/Icons/Icons';

const MainBanner = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <MainContent>
        <MainText>
          <BoldText>SELL OWN REGION TICKET</BoldText>
          <SubText>
            <PP>
              <SortMean>올바른 티켓의 시작</SortMean>
              <br />
              <SortLittle>지역인증 기반 티켓 중고 거래</SortLittle>
              <img className="sortmokup" src={Mokup} />
            </PP>
            <AllviewBtn style={{ marginTop: '1.3rem', width: '8rem' }} onClick={() => navigate('/main')}>
              <BasicBtn>
                Welcome
                {/* <RightIcon /> */}
              </BasicBtn>
            </AllviewBtn>
          </SubText>
        </MainText>
      </MainContent>
    </MainContainer>
  );
};

export default MainBanner;
