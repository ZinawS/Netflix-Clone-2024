import React from "react";
import netflixLogo from "./images/Netflix_Logo.png"; // Adjust to your path
import "./Header.css"; // Use CSS file below
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <>
    <div className="header-outer">
      <div className="header-container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width="100px" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
             
              <SearchIcon/>
            </li>
            <li>
              <NotificationsNoneIcon/>
            </li>
            
            <li>
                <AccountBoxIcon />
            </li>
            
            <li>
                <ArrowDropDownIcon />
            </li>
            {/* <li>
                <ArrowDropDownIcon />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default Header;
