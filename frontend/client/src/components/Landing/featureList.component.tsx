import { useAppSelector } from '@/redux/store';
import * as S from '@/styles/landingPage/featureList.style';

const FeatureList = () => {
  const { features } = useAppSelector((state) => state.landing);
  return (
    <S.FeatureLayout>
      <S.FeatureBox>
        {features.map((feature) => {
          return (
            <S.FeatureItem key={feature.id}>
              <img src={feature.src} />
              <p>{feature.text}</p>
            </S.FeatureItem>
          );
        })}
      </S.FeatureBox>
    </S.FeatureLayout>
  );
};

export default FeatureList;
