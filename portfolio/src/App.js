import "./App.css";
import { Background } from "./Components/Background";
import { CursorFollower } from "./Components/CursorFollower";
import { Header } from "./Components/Header";
import { Work } from "./Sections/Work";

function App() {
  return (
    <div>
      <Header />
      {/* <Background /> */}
      {/* <CursorFollower /> */}
      <Work />
    </div>
  );
}

export default App;
