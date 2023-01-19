import React, { useState } from 'react';
import Draws from '../Withdraw/style';
import Sides from '../SideBar/style';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from '../../../util/userInfo';
import { Advertise, Certified, CertifiedButton, Checkbox, IdBox, NameBox, InputBox, PasswordBox } from './style';

const MyProfile = ({ profile }: any) => {
  const editName = useDispatch();
  const [editInput, setEdit] = useState('');
  const { editInfo } = editUserInfo();

  return (
    <Draws.Container>
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw style={{ maxWidth: '480px' }}>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>내 프로필</Draws.Title>
          </Draws.ContentTitle>

          <IdBox style={{ paddingTop: '5px' }}>
            <NameBox>닉네임</NameBox>
            <InputBox type="text" defaultValue={profile?.user_name} onChange={(e) => setEdit(e.target.value)} />
            <Certified>
              <CertifiedButton style={{ marginLeft: '55px' }} onClick={() => null}>
                닉네임 변경하기
              </CertifiedButton>
            </Certified>
          </IdBox>

          <IdBox style={{ paddingTop: '5px' }}>
            <NameBox>이메일</NameBox>
            <div className="info_default">{profile?.email}</div>
          </IdBox>

          <PasswordBox style={{ paddingTop: '10px' }}>
            <NameBox>
              비밀번호
              <div className="info_default">●●●●●●●●</div>
            </NameBox>
          </PasswordBox>

          <Sides.ShoppingInfo>
            <Sides.MiniTitle>이벤트 정보 수신</Sides.MiniTitle>
            <Advertise>
              이메일 정보 수신
              <Checkbox type="checkbox" id="check1" />
            </Advertise>
            <Advertise>
              SMS 정보 수신
              <Checkbox type="checkbox" id="check1" />
            </Advertise>
          </Sides.ShoppingInfo>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
};

export default MyProfile;
