import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir from "./pages/MacBookAir.module.css";
import Login from "./pages/Login";
import SelectSeat from "./pages/SelectSeat";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  //learnings
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/selectSeat" element={<SelectSeat />} />
    </Routes>
  );
}
export default App;
