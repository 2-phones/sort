import { styled } from '@/styles/global.style';

const CommonStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PostListLayOut = styled(CommonStyle)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListBox = styled(CommonStyle)`
  width: 1200px;
  padding: 50px 0;
  position: relative;
  .post_views {
    width: 100%;
    position: absolute;
    top: 20px;
    left: 15px;
  }
`;

const MoreSection = styled(CommonStyle)`
  width: 80%;
  display: flex;
  margin: 30px;
`;

const LoadMoreButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #f4f2ed;
  box-shadow: 4px 4px 10px #cecece;
  cursor: pointer;
  &:hover {
    p {
      opacity: 0.3;
    }
  }
`;

export { PostListLayOut, ListBox, MoreSection, LoadMoreButton };
