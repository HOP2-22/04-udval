import "./App.css";
import { HomePage } from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Shortened } from "./pages/Shortened";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shortened" element={<Shortened />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
