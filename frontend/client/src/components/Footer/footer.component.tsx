import { useAppSelector } from '@/redux/store';
import * as S from '@/styles/footer/footer.style';

const Footer = () => {
  const { footer_nav, footer_description } = useAppSelector((state) => state.common);
  return (
    <S.FooterLayOut>
      <S.FooterBox>
        {footer_nav.map((nav) => {
          return (
            <S.FooterNav key={nav.id}>
              <h4>{nav.title}</h4>
              <ul>
                <li>
                  <a href=''>{nav.name}</a>
                </li>
              </ul>
            </S.FooterNav>
          );
        })}
      </S.FooterBox>
      <S.FooterBottomBox>
        <S.FooterDescriptionLeft>
          <p>{footer_description}</p>
        </S.FooterDescriptionLeft>
        <S.FooterDescriptionRight>
          <p className="madein">South Korea</p>
          <p>© 2022 SORT</p>
        </S.FooterDescriptionRight>
      </S.FooterBottomBox>
    </S.FooterLayOut>
  );
};

export default Footer;
