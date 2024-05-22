import { Outlet } from "react-router-dom";

import AppHeader from "../components/common/header";
import AppFooter from "../components/common/footer";

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default AppLayout;
