import React from "react";
import '../pages/'
import logo2 from "../assets/Logo2.png";
import social from "../assets/social.png";
import twitter from "../assets/twitter.png";
import ".././footer.css"

const Footer = () => {
  return <div class="footer">
    <div class="triangle">
        <div></div>
        <div></div>
    </div>
    <div class="frame-74">
      <div class="footer-1">
        <div class="footer-logo">
        <div class="frame-12">
            <div class="logo-image">
                <img src={logo2} alt="" /> 
            </div>
            <div class="frame-11">
                <p>We provide you with the necessary information to ease your decision-making in finding the right school for you.</p>
            </div>
        </div>
        </div>
        <div class="company-text">
        <div class="company-details">
            <p class="comp-p">Company</p>
        </div>
        <div class="company-details">
            <p>Explore</p>
        </div>
        <div class="company-details">
            <p>Admission Support</p>
        </div>
        <div class="company-details">
            <p>Community</p>
        </div>
        <div class="company-details">
            <p>Contact Us</p>
        </div>
        </div>
        <div class="recent-blogs-text">
        <div class="company-details-blog">
            <p class="comp-p">Recent Articles</p>
        </div>
        <div class="company-details-blog">
            <p>How to Write a Winning Scholarship Essay.</p>
        </div>
        <div class="company-details-blog">
            <p>Everything you need to know about applying for a master’s in Nigeria.</p>
        </div>
        <div class="company-details-blog">
            <p>How to Prepare for a Career in Law as a High Schooler.</p>
        </div>
        <div class="company-details-blog">
            <p>Most affordable cities to study Architecture</p>
        </div>
        <div class="company-details-blog">
            <p>Top art & design schools in 2022.</p>
        </div>
        </div>
       </div>
       <div class="footer-2">
       <div class="inc-text">
        <p>© Hevrinstitution. 2022</p>
       </div>
       <div class="social-icon">
        <a href="https://www.linkedin.com"><img src={social} alt=""/></a>
        <a href="https://twitter.com"><img src={twitter} alt="" /></a>
       </div>
</div>
    </div>
  </div>;
};

export default Footer;
