import React from 'react';
import { ViewMoreSection, ViewMoreBtn } from './style';
import { BasicBtn } from '../../../../components/Button/Button';
import { DownIcon } from '../../../../components/Icons/Icons';
import { useAppDispatch } from '../../../../hooks/common/redux.hook';
import { viewCount } from '../../../../redux/Slices/posts.slice';

const ViewMore = () => {
  const dispatch = useAppDispatch();
  return (
    <ViewMoreSection>
      <ViewMoreBtn onClick={() => dispatch(viewCount(8))}>
        <BasicBtn background="white" color="black" size="20px">
          <p>더보기</p>
          <p>
            <DownIcon />
          </p>
        </BasicBtn>
      </ViewMoreBtn>
    </ViewMoreSection>
  );
};

export default ViewMore;
