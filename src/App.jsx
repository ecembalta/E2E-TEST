import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import "./components/Layout.css";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Header />} />
        <Route path="login" element={<Login />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
