import { styled } from '@/styles/global.style';

const TopNavLayOut = styled.section`
  width: 100%;
  height: 30px;
  border: 1px solid #d9d9d9;
`;

const AuthNavigation = styled.section`
  position: absolute;
  width: 160px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  right: 140px;
  font-size: 13px;
  color: #696969;
  .blank_center {
    border-right: 1px solid #d9d9d9;
  }
`;

const UserNavigation = styled.section;

export { TopNavLayOut, AuthNavigation };
