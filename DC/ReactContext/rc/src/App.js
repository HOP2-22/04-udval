import "./App.css";
import { Home } from "./pages/Home";
import ThemeContext from "./ThemeContext.jsx/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
}

export default App;
