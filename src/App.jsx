//React Router Dom---------------------------
import { Route, Routes } from "react-router-dom";
//Components
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
