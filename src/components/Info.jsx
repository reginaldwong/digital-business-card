import React from "react"
import headerImage from "/src/assets/1579800055135.jpeg"
import mailIcon from "/src/assets/Mail.png"

const Info = () => {
    return (
        <header>
            <img src={headerImage} alt="reginald wong" className="header--image" />
            <h1 className="header--name">Reginald Wong</h1>
            <h3 className="header--title">Software Developer | JavaScript | React </h3>
            <h4 className="header--link"><a href="https://reginaldwong.com" target="_blank">reginaldwong.com</a></h4>
            <button className="header--button"><img  src={mailIcon}/><a href="mailto:reginaldwongdev@gmail.com" className="header--button--link">Email</a></button>
        </header>
    )
}

export default Info;