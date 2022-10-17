//React Router Dom---------------------------
import { Route, Routes } from "react-router-dom";
//Components
import Login from "./Pages/Login/Login";
import Index from "./Pages/Main/Index";
import Member from "./Pages/Main/Member";
import TechnicianDetails from "./Pages/Main/TechnicianManage/TechnicianDetails";
import TechnicianInfo from "./Pages/Main/TechnicianManage/TechnicianInfo";
import TechnicianManage from "./Pages/Main/TechnicianManage/TechnicianManage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Index />}>
          <Route path="" element={<Member />} />
          <Route path="technician-manage" element={<TechnicianManage />}>
            <Route path="details" element={<TechnicianDetails />} />
            <Route path="info" element={<TechnicianInfo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
