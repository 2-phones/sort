import { styled } from '@/styles/global.style';

const RecentPostLayOut = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 650px;
  h3 {
    text-align: center;
    width: 100%;
    height: 80px;
  }
`;

const RecentPostList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RecentPostBox = styled.li`
  width: 200px;
  height: 240px;
  border: 1px solid;
  list-style: none;
  margin: 0 20px;
`;

const ButtonSection = styled.section`
  width: 100%;
  margin-top: 80px;
  text-align: center;
`;
const ViewAllButton = styled.button`
  width: 150px;
  height: 50px;
`;

export { RecentPostLayOut, RecentPostList, RecentPostBox, ButtonSection, ViewAllButton };
