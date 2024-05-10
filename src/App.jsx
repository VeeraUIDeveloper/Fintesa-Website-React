import "./sass/main.scss";

import AppHeader from "./components/common/header.jsx";
import AppFooter from "./components/common/footer.jsx";
import HeroSection from "./components/hero/hero.jsx";

const App = () => {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <AppFooter />
    </>
  );
};

export default App;
