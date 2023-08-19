import "./App.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36rem", left: "-8rem" }}></div>
      {/* <div className="blur"></div> */}
      <Home />
    </div>
  );
}

export default App;
