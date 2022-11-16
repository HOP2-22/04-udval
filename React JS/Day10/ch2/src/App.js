import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products } from "./pages";
import { Layout } from "./layout/layout";
import { Contact } from "./pages/Contact";
import { GetAccess } from "./pages/GetAccess";
import { Blog } from "./pages/Blog";
import Login from "./pages/Login";
import { BlogPost } from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/GetAccess" element={<GetAccess />} />
          <Route path="/Blogs/:id" element={<BlogPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
