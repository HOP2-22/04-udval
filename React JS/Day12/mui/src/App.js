import * as React from "react";
import Header from "./components/Header";
import { PageOne } from "./pages/PageOne";

export const App = () => {
  return (
    <div>
      <Header />
      <PageOne />
    </div>
  );
};

export default App;
