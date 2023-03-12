import React from 'react';
import Writes from './WriteMainStyle';
import { BsCameraFill } from 'react-icons/bs';
import Draws from '../../Profile/Withdraw/style';
import { usePostInput } from '../../../hooks/post/postInput.hook';
import { useEditPost, useGetPostId } from '../../../hooks/post/posts.hook';
import { useClick } from '../../../hooks/common/click.hook';
import { useParams } from 'react-router-dom';
import { dateChange } from '../../../util/dateChange';
import { useAppSelector } from '../../../hooks/common/redux.hook';

const EditMain = () => {
  const [userData, changehandler] = usePostInput();
  const { isClick, oneClickHandler } = useClick();
  const { id } = useParams();
  const { post } = useGetPostId(id);
  const inputs = useAppSelector((state) => state.page.writePageInputs);

  return (
    <Writes.MainContainer>
      <Writes.ContainerTop>
        <Writes.TopTitle>
          상품수정
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
              {post.img_url ? (
                <Writes.UpImg>
                  <img src={post.img_url} />
                </Writes.UpImg>
              ) : null}
            </Writes.Wrap>
          </Writes.ImgWrap>
        </Writes.Writeframe>
        {inputs.map((input) => {
          const date = dateChange(post.end_date);

          return (
            <Writes.Writeframe key={input.id}>
              <Writes.MiniTitle>
                {input.label}
                <Writes.RedSpan>{input.required}</Writes.RedSpan>
              </Writes.MiniTitle>
              <Writes.ImgWrap>
                {input.name === 'categories' ? (
                  <Writes.TicketCategory>
                    <Writes.TicketBar>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Writes.TicketBar>
                  </Writes.TicketCategory>
                ) : input.name === 'body' ? (
                  <Draws.WriteInput
                    name={input.name}
                    onChange={changehandler}
                    autoComplete="off"
                    value={userData[input.name] ? userData[input.name] : post[input.name]}
                    placeholder={input.placeholder}
                  />
                ) : (
                  <Writes.GreyInput
                    style={{ width: '28%' }}
                    type={input.type}
                    name={input.name}
                    value={
                      input.name === 'end_date'
                        ? date
                        : userData[input.name]
                        ? userData[input.name]
                        : post[input.name] || ''
                    }
                    autoComplete="off"
                    onChange={changehandler}
                    placeholder={input.placeholder}
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
        <Draws.WhiteButtonBox onClick={() => useEditPost(userData, id || '')}>수정하기</Draws.WhiteButtonBox>
      </Draws.RealAgree>
    </Writes.MainContainer>
  );
};

export default EditMain;
