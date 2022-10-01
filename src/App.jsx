//React Router Dom---------------------------
import { Route, Routes } from "react-router-dom";
//Components
import Login from "./Pages/Login/Login";
import Index from "./Pages/Main/Index";
import Member from "./Pages/Main/Member";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Index />}>
          <Route path="/home" element={<Member />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
