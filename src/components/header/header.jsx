import react from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/home/home";

import images from "../../constants/images";
import "../header/header.css";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <Link to='/'>
          <img src={images.logo} alt="DevJobs Logo" />
        </Link>
      </div>
      <div className="app__header-lightmode">
        <img src={images.sunIcon} alt="Sun Icon" />
        <div className="app__header-switch"></div>
        <img src={images.moonIcon} alt="Moon Icon" />
      </div>
    </div>
  );
};

export default Header;
