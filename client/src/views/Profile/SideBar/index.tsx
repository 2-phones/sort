import React from 'react';
import Sides from './style';
import { useNavigate } from 'react-router-dom';
import {  menuChoice } from '../../../redux/Slices/page.slice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';

const SideBar = () => {

  const trademenus = useAppSelector((state) => state.page.trade);
  const myInfomenus = useAppSelector((state) => state.page.myInfo);
  const dispatch = useAppDispatch();
  return (
    <Sides.SideBar>
      <Sides.MypageTitle onClick={() => dispatch(menuChoice(0))}>MY PAGE</Sides.MypageTitle>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>거래정보</Sides.MiniTitle>
        <Sides.LiLinks>
          {trademenus &&
            trademenus.map((menu, i) => {
              return (
                <Sides.LiLink key={menu.id} onClick={() => dispatch(menuChoice(menu.id))}>
                  {menu.name}
                </Sides.LiLink>
              );
            })}
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>내 정보</Sides.MiniTitle>
        <Sides.LiLinks>
          {myInfomenus &&
            myInfomenus.map((menu) => {
              return (
                <Sides.LiLink key={menu.id} onClick={() => dispatch(menuChoice(menu.id))}>
                  {menu.name}
                </Sides.LiLink>
              );
            })}
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>고객센터</Sides.MiniTitle>
        <Sides.LiLinks>
          <Sides.LiLink href="https://bizmessage.kakao.com/chat/open">상담하기</Sides.LiLink>
          <br />
          <br />
          <Sides.JustSpan>상담시간 월~금 9:00 ~ 18:00</Sides.JustSpan>
          <br />
          <Sides.JustSpan>점심시간 12:00 ~ 13:00</Sides.JustSpan>
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
    </Sides.SideBar>
  );
};

export default SideBar;
