import Home from "./routes/home/home.component";

import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  const Navigation = () => {
    return (
      <div>
        <div>
          <h1>I am a navigation bar</h1>
          <Outlet />
        </div>
      </div>
    );
  };
  const Shop = () => {
    return <h1>This is the shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
