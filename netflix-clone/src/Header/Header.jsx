// src/components/Header/Header.jsx
import React, { useState } from "react";
import netflixLogo from "./images/Netflix_Logo.png"; // Adjust path
import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-outer">
      <div className="header-container">
        {/* Left: Logo and Navigation */}
        <div className="header_left">
          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            <li className="logo">
              <img src={netflixLogo} alt="Netflix Logo" width="100px" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
            {/* Tudum Event Promo (May 2025) */}
            <li className="tudum-promo">
              <a href="https://www.netflix.com/tudum">
                Watch Tudum Live May 31!
              </a>
            </li>
          </ul>
          {/* Hamburger Menu for Mobile */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Right: Icons */}
        <div className="header_right">
          <ul>
            <li className="search-icon" title="AI-Powered Search (Beta)">
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
            {/* Vertical Feed Toggle (Mobile-Only) */}
            <li className="vertical-feed-toggle">
              <span role="img" aria-label="Video Feed">
                📽️
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
