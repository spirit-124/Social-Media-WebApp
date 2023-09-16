import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/Auth/Auth";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "30rem", left: "-8rem" }}></div>
      {/* <div className="blur"></div> */}
      {/* <Home /> */}
      <Auth />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
