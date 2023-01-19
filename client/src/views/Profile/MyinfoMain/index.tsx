import React from 'react';
import Mains from './style';
import { useNavigate } from 'react-router-dom';
import Draws from '../Withdraw/style';
import Wishs from '../MyWish/style';

const MyinfoMain = ({ profile }: any) => {
  const navigate = useNavigate();

  return (
    <Draws.CustomerContent
      style={{
        minHeight: '1020px',
      }}
    >
      <Draws.CustomerWithdraw>
        <Mains.UserContainter>
          <Mains.UserUSer>
            <img src={profile?.profile_url} />
          </Mains.UserUSer>
          <Mains.UserInfo>
            <Mains.UserID>{profile?.user_name}</Mains.UserID>
            <Mains.UserEmail>{profile?.email}</Mains.UserEmail>
          </Mains.UserInfo>
        </Mains.UserContainter>

        <Mains.Just>
          <Mains.TitleMore>
            <Mains.Title>구매 상품</Mains.Title>
            {/* <Mains.More onClick={() => navigate('/mypage/buy')}>더보기 ﹥</Mains.More> */}
          </Mains.TitleMore>
          <Wishs.Content style={{ marginBottom: '100px' }}>
            <Wishs.Item>
              <Wishs.ItemImg>
                <Wishs.RealItem>
                  <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                </Wishs.RealItem>
              </Wishs.ItemImg>
              <Wishs.ItemNamePrice>
                <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                <br></br>
                <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
              </Wishs.ItemNamePrice>
            </Wishs.Item>
            <Wishs.Item>
              <Wishs.ItemImg>
                <Wishs.RealItem>
                  <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                </Wishs.RealItem>
              </Wishs.ItemImg>
              <Wishs.ItemNamePrice>
                <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                <br></br>
                <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
              </Wishs.ItemNamePrice>
            </Wishs.Item>
          </Wishs.Content>
        </Mains.Just>

        <Mains.Just>
          <Mains.TitleMore>
            <Mains.Title>판매 상품</Mains.Title>
            {/* <Mains.More onClick={() => navigate('/mypage/sell')}>더보기 ﹥</Mains.More> */}
          </Mains.TitleMore>
          <Wishs.Content>
            <Wishs.Item>
              <Wishs.ItemImg>
                <Wishs.RealItem>
                  <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                </Wishs.RealItem>
              </Wishs.ItemImg>
              <Wishs.ItemNamePrice>
                <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
                <br></br>
                <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
              </Wishs.ItemNamePrice>
            </Wishs.Item>
          </Wishs.Content>
        </Mains.Just>
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
};

export default MyinfoMain;
