import "./sass/main.scss";

import AppHeader from "./components/common/header.jsx";
import AppFooter from "./components/common/footer.jsx";
import HeroSection from "./components/hero/hero.jsx";
import AchievementSection from "./components/home-page/achievements.jsx";
import AboutSection from "./components/home-page/about.jsx";

const App = () => {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <AchievementSection />
      <AboutSection />
      <AppFooter />
    </>
  );
};

export default App;
