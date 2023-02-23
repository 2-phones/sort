import React from 'react';
import Writes from './WriteMainStyle';
import { BsCameraFill } from 'react-icons/bs';
import Draws from '../../Profile/Withdraw/style';
import { usePostInput } from '../../../hooks/post/Input.hook';
import { useCreatePost } from '../../../hooks/post/posts.hook';
import { useValidate } from '../../../hooks/common/validation.hook';
import { useClick } from '../../../hooks/common/click.hook';
import { useAppSelector } from '../../../hooks/common/redux.hook';

const WriteMain = () => {
  const [userData, changehandler] = usePostInput();
  const { postCheck, check } = useValidate();
  const { isClick, oneClickHandler } = useClick();
  const categoires = useAppSelector((state) => state.posts.categories);
  const inputs = useAppSelector((state) => state.page.writePageInputs);

  const postHandler = (data: any) => {
    oneClickHandler();
    postCheck(data);
    check ? useCreatePost(data) : null;
  };

  return (
    <Writes.MainContainer>
      <Writes.ContainerTop>
        <Writes.TopTitle>
          티켓등록
          <Writes.RedSpan style={{ marginLeft: '20px' }}>*필수항목</Writes.RedSpan>
        </Writes.TopTitle>
      </Writes.ContainerTop>

      <Writes.WriteBox>
        <Writes.Writeframe>
          <Writes.MiniTitle>
            티켓 이미지<Writes.RedSpan>*</Writes.RedSpan>
            <br />
            {/* <small>{imageUrlLists.length}/4</small> */}
          </Writes.MiniTitle>

          <Writes.ImgWrap>
            <Writes.Wrap>
              <Writes.InputBox>
                <BsCameraFill style={{ width: '2rem', height: '2rem' }} />
                이미지 등록
                <input
                  name="img_url"
                  type="file"
                  id="file"
                  accept="image/jpg, image/jpeg, image/png, image/svg "
                  onChange={changehandler}
                />
              </Writes.InputBox>
              {userData.img_url ? (
                <Writes.UpImg>
                  <img src={userData.img_url} />
                </Writes.UpImg>
              ) : null}
            </Writes.Wrap>
          </Writes.ImgWrap>
        </Writes.Writeframe>
        {inputs.map((input) => {
          return (
            <Writes.Writeframe key={input.id}>
              <Writes.MiniTitle>
                {input?.label}
                <Writes.RedSpan>{input?.required}</Writes.RedSpan>
              </Writes.MiniTitle>
              <Writes.ImgWrap>
                {input.name === 'categories' ? (
                  <Writes.TicketCategory>
                    <Writes.TicketBar name={input?.name} onChange={changehandler}>
                      {categoires.map((category) => {
                        return <option>{category}</option>;
                      })}
                    </Writes.TicketBar>
                  </Writes.TicketCategory>
                ) : input.name === 'body' ? (
                  <Draws.WriteInput
                    name={input?.name}
                    value={userData[input.name] || ''}
                    onChange={changehandler}
                    autoComplete="off"
                    placeholder={input.placeholder}
                  />
                ) : (
                  <Writes.GreyInput
                    style={{ width: '28%' }}
                    type={input?.type}
                    name={input?.name}
                    value={userData[input.name] || ''}
                    autoComplete="off"
                    onChange={changehandler}
                    placeholder={input?.placeholder}
                  />
                )}

                <Writes.ErrorMsg display={isClick ? 'flex' : 'none'}>
                  {!userData[input.name] ? <p>{input.error}</p> : null}
                </Writes.ErrorMsg>
              </Writes.ImgWrap>
            </Writes.Writeframe>
          );
        })}
      </Writes.WriteBox>

      <Draws.RealAgree style={{ marginTop: '-30px', marginBottom: '40px' }}>
        <Draws.BlackButtonBox onClick={() => window.history.back()}>취소하기</Draws.BlackButtonBox>
        <Draws.WhiteButtonBox onClick={() => postHandler(userData)}>티켓등록</Draws.WhiteButtonBox>
      </Draws.RealAgree>
    </Writes.MainContainer>
  );
};

export default WriteMain;
