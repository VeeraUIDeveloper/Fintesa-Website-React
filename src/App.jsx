import "./sass/main.scss";

import AppHeader from "./components/common/header.jsx";
import AppFooter from "./components/common/footer.jsx";
import HeroSection from "./components/hero/hero.jsx";
import AchievementSection from "./components/home-page/achievements.jsx";

const App = () => {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <AchievementSection />
      <AppFooter />
    </>
  );
};

export default App;
