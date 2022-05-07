import "./App.css";
import { useSelector } from "react-redux";
// import Navbar from "./Navbar/Navbar"
import { Routing } from "./Routing/Routing";
// import Nav from "./Navbar/Nav";
import Footer from "./Footer.jsx/Footer";
import FinalNav from "./Navbar/Navbar/FinalNav";
import Purchase from "./Order/Purchase/Purchase";

function App() {
  const isLoggedIn = useSelector((store) => store.userDetails.isLoggedIn);
  
  return (
    <div className="App">
      <FinalNav/>
      <Routing/>
      {/* <Purchase/> */}
      <Footer/>
    </div>
  );
}

export default App;
