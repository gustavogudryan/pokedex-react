import "./App.css"
import Pokelist from "./components/PokeList";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";


function App() {
  return (
    <>
      <Topbar />
      <Pokelist />
      <Bottombar />
    </>
  );
}

export default App;
