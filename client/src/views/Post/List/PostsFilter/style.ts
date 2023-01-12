import styled from 'styled-components';

const AllOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;

  @media screen and (max-width: 720px) {
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 620px) {
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 8px;
    }
  }
`;

const FilterSection = styled.div`
  width: 1200px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
`;
const FilterBox = styled(AllOption)`
  width: 100%;
  height: 100px;
  flex-wrap: wrap;
`;

const FilterOption = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;
const FilterTopBox = styled(FilterOption)`
  border-bottom: 2px solid var(--lightgray);
  height: 62px;
`;
const FilterBottomBox = styled(FilterOption)``;
const FilterLeft = styled(FilterOption)`
  width: 60%;
  @media screen and (max-width: 450px) {
    display: flex;
    height: 40px;
    margin-top: 20px;
  }
`;
const FilterRight = styled(FilterOption)`
  width: 100%;
  justify-content: flex-end;
  .drop_bar {
    position: absolute;
    width: 100px;
    height: 150px;
    border: 1px solid;
    right: 0;
    top: 50px;
  }
`;

const SearchSection = styled.div`
  position: relative;
  width: 160px;
  margin: 0 10px;
  p {
    position: absolute;
    top: 3px;
    right: -10px;
    font-size: 25px;
    color: gray;
    cursor: pointer;
  }
`;

const TagSection = styled.div`
  display: flex;
`;

export { FilterSection, FilterBox, FilterLeft, FilterRight, SearchSection, TagSection, FilterTopBox, FilterBottomBox };
