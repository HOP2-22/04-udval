import "./App.css";
import { HomePage } from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Shortened } from "./pages/Shortened";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Redirect } from "./pages/Redirect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shortened/:id" element={<Shortened />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
