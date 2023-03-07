import React from 'react';
import { BasicBtn } from '../../../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { likeFeature } from '../../../../redux/itemslice';
import { HeartIcon, NonHeartIcon } from '../../../../components/Icons/Icons';
import { Detail_ItemInfo, InfoTop, InfoBottom, StartDate, EndDate, Seat, Tags, Btn } from './style';
import { useAppDispatch, useAppSelector } from '../../../../hooks/common/redux.hook';
import { tokenCheck } from '../../../../util/tokenCheck';
import { useModal } from '../../../../hooks/common/modal.hook';
import Chat from '../../../../components/chat';
import { ProductInterface } from '../../../../interfaces/posts/post.interface';
import { addPostId } from '../../../../redux/Slices/posts.slice';
import { useClick } from '../../../../hooks/common/click.hook';

const DetailItemInfo = ({ title, price, createdDate, endDate, seat, region }: ProductInterface) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const like = useAppSelector((state) => state.items.isLike);
  const { id } = useParams();
  const token = tokenCheck();
  const { clickHandler } = useModal();
  const { isClick, handleClick } = useClick();

  const sendChat = (post_id: string | undefined) => {
    !token ? clickHandler('login') : null;
    dispatch(addPostId(post_id));
    handleClick();
  };

  return (
    <Detail_ItemInfo>
      {isClick && token ? <Chat /> : null}
      <InfoTop>
        <p className="info_title">{title}</p>
        <div className="item_price">
          <h1 className="price">{price}</h1>
          <p className="won">원</p>
        </div>
      </InfoTop>
      <InfoBottom>
        <StartDate>
          <p className="info_title">등록</p>
          <p className="infor_data">{createdDate}</p>
        </StartDate>
        <EndDate>
          <p className="info_title">기간</p>
          <p className="infor_data">{endDate}</p>
        </EndDate>
        <Seat>
          <p className="info_title">좌석</p>
          <p className="infor_data">{seat}</p>
        </Seat>
        <Seat>
          <p className="info_title">지역</p>
          <p className="infor_data">{region}</p>
        </Seat>
        <Tags></Tags>
        <Btn>
          <div className="top_btn">
            <BasicBtn background="#385275" onClick={() => navigate('/main')}>
              게시물 리스트
            </BasicBtn>
          </div>
          <div className="top_btn">
            <BasicBtn background="#385275" onClick={() => sendChat(id)}>
              메세지 보내기
            </BasicBtn>
          </div>
          <div className="bottom_btn">
            <BasicBtn background="#fcbdbd" onClick={() => dispatch(likeFeature(!like[0]))}>
              <p className="like_icon">
                {like[0] ? (
                  <HeartIcon className="heart_icon" color="#d94c5a" />
                ) : (
                  <NonHeartIcon className="heart_icon" color="#d94c5a" />
                )}
              </p>
              <p className="like_text">찜하기</p>
            </BasicBtn>
          </div>
        </Btn>
      </InfoBottom>
    </Detail_ItemInfo>
  );
};

export default DetailItemInfo;
