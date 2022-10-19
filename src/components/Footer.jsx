import React from "react";
import '../pages/'
import logo2 from "../assets/Logo2.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import ".././footer.css"

const Footer = () => {
  return <div className="footer">
    <div className="triangle">
        <div></div>
        <div></div>
    </div>
    <div className="frame-74">
      <div className="footer-1">
        <div className="footer-logo">
        <div className="frame-12">
            <div className="logo-image">
                <img src={logo2} alt="" /> 
            </div>
            <div className="frame-11">
                <p>We provide you with the necessary information to ease your decision-making in finding the right school for you.</p>
            </div>
        </div>
        </div>
        <div className="company-text">
        <div className="company-details">
            <p className="comp-p">Company</p>
        </div>
        <div className="company-details">
            <p>Explore</p>
        </div>
        <div className="company-details">
            <p>Admission Support</p>
        </div>
        <div className="company-details">
            <p>Community</p>
        </div>
        <div className="company-details">
            <p>Contact Us</p>
        </div>
        </div>
        <div className="recent-blogs-text">
        <div className="company-details-blog">
            <p className="comp-p">Recent Articles</p>
        </div>
        <div className="company-details-blog">
            <p>How to Write a Winning Scholarship Essay.</p>
        </div>
        <div className="company-details-blog">
            <p>Everything you need to know about applying for a master’s in Nigeria.</p>
        </div>
        <div className="company-details-blog">
            <p>How to Prepare for a Career in Law as a High Schooler.</p>
        </div>
        <div className="company-details-blog">
            <p>Most affordable cities to study Architecture</p>
        </div>
        <div className="company-details-blog">
            <p>Top art & design schools in 2022.</p>
        </div>
        </div>
       </div>
       <div className="footer-2">
       <div className="inc-text">
        <p>© Hevrinstitution. 2022</p>
       </div>
       <div className="social-icon">
        <a href="https://www.linkedin.com"><img src={linkedin} alt=""/></a>
        <a href="https://twitter.com"><img src={twitter} alt="" /></a>
       </div>
      </div>
    </div>
  </div>;
};

export default Footer;
