import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
