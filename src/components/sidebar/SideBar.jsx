import "./SideBar.css";
import React, { useState } from "react";
import NavItems from "./NavItems";
import { BsBootstrap } from "react-icons/bs";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/icons/svg icons/logo.svg";
import menue from "../../assets/icons/svg icons/vuesax.svg";
import { Link } from "react-router-dom";
import ProfileItem from "./ProfileItem";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const collapseMenue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"sidebar " + (isOpen ? "open" : "")}>
      <div className="logo-details">
        {isOpen && <img src={logo} alt="logo" className="icon" />}
        {isOpen && (
          <Link to="/Home" className="logo_name">
            ElZOBOON
          </Link>
        )}
        {isOpen && (
          <img
            src={menue}
            alt="menue"
            onClick={collapseMenue}
            className="meneuBtn"
          />
        )}
        {!isOpen && <BiMenu onClick={collapseMenue} className="meneuBtn" />}
      </div>

      <NavItems />
      <ProfileItem isOpen={isOpen} />
    </div>
  );
};

export default SideBar;
