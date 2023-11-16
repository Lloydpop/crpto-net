import { Route, Routes, Outlet } from "react-router-dom";
import { PageWrapper } from "../component";
import { Homepage } from "../pages";
import Coins from "../pages/Coins/Coins";
import CoinDetail from "../pages/CoinDetail/CoinDetail";
import Exchange from "../pages/Exchange/Exchange";
const PageRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        }
      >
        <Route path="/" element={<Homepage />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="coins">
          <Route index element={<Coins />} />
          <Route path=":id" element={<CoinDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default PageRouter;
