import * as S from '@/styles/landingPage/recentPosts.style';
const RecentPosts = () => {
  const testList = [1, 2, 3, 4, 5];
  return (
    <S.RecentPostLayOut>
      <h3>최근상품</h3>
      <S.RecentPostList>
        {testList.map((post) => {
          return (
            <S.RecentPostBox key={post}>
              <img />
              <p>테긋트</p>
            </S.RecentPostBox>
          );
        })}
      </S.RecentPostList>
      <S.ButtonSection>
        <S.ViewAllButton>전체보기</S.ViewAllButton>
      </S.ButtonSection>
    </S.RecentPostLayOut>
  );
};

export default RecentPosts;
