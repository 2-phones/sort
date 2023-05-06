import FeatureList from '../components/Landing/featureList.component';
import RecentPosts from '../components/Landing/recentPosts.component';
import ServiceIntro from '../components/Landing/serviceIntro.component';

const LandingPage = () => {
  return (
    <>
      <ServiceIntro />
      <FeatureList />
      <RecentPosts />
    </>
  );
};

export default LandingPage;
