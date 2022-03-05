import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { Services } from "./Services";
import About from "./About";
import Contect from "./Contect";
import NavMenu from "./NavMenu";
import Crud from "./Crud";
import AddItem from "./AddItem";
import Veiw from "./Veiw";
import Edit from "./Edit";
import Delete from "./Delete";
import Select from "./Select";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/services" element={<Services />} />
        <Route exect path="/about" element={<About />} />
        <Route exect path="/contect" element={<Contect />} />
        <Route exect path="/NavMenu" element={<NavMenu />} />
        <Route exect path="/Crud" element={<Crud />} />
        <Route exect path="/AddItem" element={<AddItem />} />
        <Route exect path="/View/:id" element={<Veiw />} />
        <Route exect path="/Edit/:id" element={<Edit />} />
        <Route exect path="/Delete" element={<Delete />} />
        <Route exect path="/Select" element={<Select />} />
      </Routes>
    </>
  );
}

export default App;
