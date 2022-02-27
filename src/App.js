import './App.css';
import { Routes, Route,} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import { Services } from './Services';
import About from './About';
import Contect from './Contect';
import NavMenu from './NavMenu';

function App() {
  return (
    <>
    <Navbar/>
  <Routes>
    <Route exect path='/' element={<Home/>}/>
    <Route exect path='/services' element={<Services/>}/>
    <Route exect path='/about' element={<About/>}/>
    <Route exect path='/contect' element={<Contect/>}/>
    <Route exect path='/NavMenu' element={<NavMenu/>}/>
  </Routes>
    </>
  );
}

export default App;
