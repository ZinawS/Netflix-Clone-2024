import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css"

function Footer() {
  return (
    <>
    <div className='footer-outer-container'>
        <div className='footer-inner-container'>
            <div className='footer-icon'>
                <ul>
                    <li><FacebookRoundedIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><YouTubeIcon/></li>
                </ul>


            </div>
            <div className='footer-data'>
                <div>
                    <ul>
                        <li>Audio description</li>
                        <li>Invester relations</li>
                        <li>Legal Notice</li>
                        <li>Service Code</li>
                        <li><CopyrightIcon height="10px"/>1997-2024 Netflix Inc.</li>
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
    </div>
    </>
  )
}

export default Footer