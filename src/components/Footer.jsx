import React from "react"
import twitterIcon from "/src/assets/Twitter Icon.png"
import facebookIcon from "/src/assets/Facebook Icon.png"
import instagramIcon from "/src/assets/Instagram Icon.png"
import linkedinIcon from "/src/assets/Linkedin Icon.png"
import githubIcon from "/src/assets/GitHub Icon.png"

const Footer = () => {
    return (
       <footer>
        <ul className="footer--list">
            <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src={twitterIcon}/></a></li>
            <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src={facebookIcon}/></a></li>
            <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src={instagramIcon}/></a></li>
            <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src={linkedinIcon}/></a></li>
            <li><a href="https://linkedin.com/in/reginaldwong" target="_blank"><img src={githubIcon}/></a></li>
           
        </ul>
       </footer>
    )
}

export default Footer;