import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products } from "./pages";
import { Layout } from "./layout/layout";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetAccess from "./pages/GetAccess";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/GetAccess" element={<GetAccess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
