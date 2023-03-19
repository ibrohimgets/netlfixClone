import { React, useState } from "react";
import "./nav.scss";
import { GoSearch } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(scroll);
  return (
    <div className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            className="one"
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt="logo"
          />
          <img
            className="two"
            src="https://www.pngmart.com/files/10/Netflix-N-Logo-PNG-File.png"
            alt="pic"
          />
          <div className="links">
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Originals</span>
            <span>Recently Added</span>
            <span>My List</span>
          </div>
        </div>
        <div className="right">
          <GoSearch className="icon" />
          <span>KIDS</span>
          <AiOutlineBell className="icon" />
          <img
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            alt="user"
          />
          <div className="profile">
            <IoIosArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
