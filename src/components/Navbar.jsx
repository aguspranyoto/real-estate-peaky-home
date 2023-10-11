import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="logo">PeakyHome</div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>For sale</li>
            <li>To rent</li>
            <li>House prices</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="entry">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
        <div className="menu-icon" onClick={handleMenu}>
          {menuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
