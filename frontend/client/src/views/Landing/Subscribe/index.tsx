import React from 'react';
import { Input } from '../../../components/Input/Input';
import Lands from './style';

const Subscribe = () => {
  return (
    <Lands.Subscribe>
      <Lands.SubForm>
        <Lands.SubFormContainer>
          <Lands.SubTitle>SORT의 소식을 보내드려요</Lands.SubTitle>
          <Lands.SubMini>저희 팀의 멤버가 되어보세요</Lands.SubMini>
          <Input placeholder="이메일 입력 후 Enter를 누르세요." padding="5px 10px" />
        </Lands.SubFormContainer>
      </Lands.SubForm>
    </Lands.Subscribe>
  );
};

export default Subscribe;
