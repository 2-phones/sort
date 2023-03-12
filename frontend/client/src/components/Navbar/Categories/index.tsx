import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../style';
import { closeCategory, selectCategory, createTag } from '../../../redux/itemslice';

const NavCategory = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.items.isLoad);
  const categorylist = useSelector((state) => state.items.categorys);
  const abcd = useSelector((state) => state.items.tags);
  const focusCategory = useSelector((state) => state.items.category);

  return (
    <>
      {!isLoad ? null : (
        <S.BottomUnderLine>
          <S.CategorySection>
            {categorylist.map((li, i) => {
              return (
                <S.CategoryMain key={i} onClick={() => dispatch(selectCategory(li))}>
                  <p className="category_icon">
                    {/* <img className={focusCategory === li ? 'select_img' : ''} src={imgname[i]} /> */}
                  </p>
                  <p className={focusCategory === li ? 'select_text' : 'category_text'}>{li}</p>
                </S.CategoryMain>
              );
            })}
          </S.CategorySection>
        </S.BottomUnderLine>
      )}
    </>
  );
};

export default NavCategory;
