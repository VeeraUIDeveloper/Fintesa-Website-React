import "./sass/main.scss";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/app-layout.jsx";
import Home from "./routes/home.component.jsx";
import NotFound from "./routes/not-found.component.jsx";
import { routes } from "./routes.js";

const App = () => {
  return (
    <Routes>
      <Route exact path={routes.index} element={<AppLayout />}>
        <Route exact index element={<Home />} />
        <Route exact path={routes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
