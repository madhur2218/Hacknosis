import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="h-full min-h-screen w-11/12 mx-auto sm:p-5 pt-20 sm:pt-20 grid">
          <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
