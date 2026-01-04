import NavBar from "./composants/Navbar";
import Produits from "./composants/Produits";
import Home from "./composants/Home"
import './App.css'

const App=()=> {
  return (
    <div className="app">
    <NavBar/>
    <Home/>
    <Produits/>
    </div>
  );
}

export default App;
