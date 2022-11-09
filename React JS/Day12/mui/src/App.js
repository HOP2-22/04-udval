import * as React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { PageOne } from "./pages/PageOne";

export const App = () => {
  return (
    <div>
      <Header />
      <PageOne />
      <Footer />
    </div>
  );
};

export default App;
