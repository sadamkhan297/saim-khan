import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="navigation">
        <div>
          <div className={show ? "navi" : "navbar"}>
            <div className={show ? "showNav" : "navlinks2"}>
              <Link className="navlinks" to="/">
                Home
              </Link>
              <Link className="navlinks" to="/services">
                Services
              </Link>
              <Link className="navlinks" to="/about">
                About
              </Link>
              <Link className="navlinks" to="/contect">
                Contect Us
              </Link>
              <Link className="navlinks" to="/NavMenu">
                Nav Manu
              </Link>
              <Link className="navlinks" to="/Crud">
                Crud
              </Link>
            </div>
          </div>
        </div>
        <div className="hmbr-container">
          <div className="havbrgr" onClick={handleClick}>
            <span className="ham1"></span>
            <span className="ham2"></span>
            <span className="ham3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
