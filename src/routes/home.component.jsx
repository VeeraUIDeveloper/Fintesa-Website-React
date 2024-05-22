import HeroSection from "../components/hero/hero.jsx";
import AchievementSection from "../components/home-page/achievements.jsx";
import AboutSection from "../components/home-page/about.jsx";
import FeatureSection from "../components/home-page/features.jsx";
import ProcessSection from "../components/home-page/process.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AchievementSection />
      <AboutSection />
      <FeatureSection />
      <ProcessSection />
    </>
  );
};

export default Home;
