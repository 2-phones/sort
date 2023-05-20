import { styled } from '@/styles/global.style';

interface FilterTabsProps {
  border: boolean;
  isColor: boolean;
}

const CommonStyle = styled.div`
  display: flex;
`;

const PostFilterLayOut = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TabsBox = styled(CommonStyle)`
  width: 80%;
  height: 50px;
  border-bottom: 2px solid #c2c2c2;
`;

const FilterTabs = styled(CommonStyle)<FilterTabsProps>`
  width: 80px;
  height: 100%;
  border-bottom: ${(props) => (props.border ? '5px solid black' : 'none')};
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  color: ${(props) => (!props.isColor ? '#A5A3A3' : '')};
  p {
    cursor: pointer;
  }
`;

export { PostFilterLayOut, TabsBox, FilterTabs };
