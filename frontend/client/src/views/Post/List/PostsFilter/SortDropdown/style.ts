import styled from 'styled-components';

interface Propstype {
  display: string;
}

const SortSection = styled.div`
  position: relative;
  z-index: 2;
`;

const SortByOption = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid gray;
  box-shadow: 1px 1px 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  color: black;
  .select_icon {
    display: flex;
    align-items: center;
    transition: all ease 0.5s;
    color: black;
    font-size: 15px;
    cursor: pointer;
  }

  .select_icon.open {
    transform: rotate(180deg);
    transition: all ease 0.5s;
  }

  @media screen and (max-width: 720px) {
    margin-top: 25px;
    width: 70px;
    height: 20px;
    font-size: 10px;
  }
  @media screen and (max-width: 430px) {
    width: 50px;
    p {
      font-size: 8px;
    }
  }
`;

const SortOpDropbar = styled(SortByOption)<Propstype>`
  display: ${(props) => props.display || 'none'};
  position: absolute;
  transition: all ease 0.5s;
  left: 0;
  width: 100px;
  height: 150px;
  border: 2px solid #434445;
  align-items: center;
  flex-wrap: wrap;
  right: 0;
  top: 35px;
  background: white;
  color: #7a7d7c;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
  }
  p:hover {
    width: 90%;
    border-radius: 10px;
    background: #455285;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 720px) {
    margin-top: 15px;
    width: 70px;
    p {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 430px) {
    width: 50px;
  }
`;

export { SortSection, SortByOption, SortOpDropbar };
