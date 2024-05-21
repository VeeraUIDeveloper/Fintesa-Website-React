import "./sass/main.scss";

import AppHeader from "./components/common/header.jsx";
import AppFooter from "./components/common/footer.jsx";
import HeroSection from "./components/hero/hero.jsx";
import AchievementSection from "./components/home-page/achievements.jsx";
import AboutSection from "./components/home-page/about.jsx";
import FeatureSection from "./components/home-page/features.jsx";
import ProcessSection from "./components/home-page/process.jsx";

const App = () => {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <AchievementSection />
      <AboutSection />
      <FeatureSection />
      <ProcessSection />
      <AppFooter />
    </>
  );
};

export default App;
