// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";

function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        {/* Mobile Navigation Bar */}
        <nav className="footer-nav-mobile">
          <ul>
            <li>
              <HomeIcon />
              <span>Home</span>
            </li>
            <li className="search-icon" title="AI-Powered Search (Beta)">
              <SearchIcon />
              <span>Search</span>
            </li>
            <li>
              <TvIcon />
              <span>TV Shows</span>
            </li>
            <li>
              <MovieIcon />
              <span>Movies</span>
            </li>
            <li>
              <PersonIcon />
              <span>My Netflix</span>
            </li>
            <li className="vertical-feed">
              <span role="img" aria-label="Video Feed">
                📽️
              </span>
              <span>Feed</span>
            </li>
          </ul>
        </nav>

        {/* Desktop Footer */}
        <div className="footer-desktop">
          <div className="footer-icon">
            <ul>
              <li>
                <FacebookRoundedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li>Service Code</li>
                <li>
                  <CopyrightIcon sx={{ fontSize: 14 }} /> 1997-2024 Netflix Inc.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tudum Promo */}
        <div className="tudum-promo">
          <a href="https://www.netflix.com/tudum">
            Join Tudum 2025 Live - May 31!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
