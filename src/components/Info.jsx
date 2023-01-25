import React from "react"
import headerImage from "/src/assets/1579800055135.jpeg"

const Info = () => {
    return (
        <header>
            <img src={headerImage} alt="reginald wong" className="header--image" />
            <h1 className="header--name">Reginald Wong</h1>
            <h3 className="header--title">Full Stack Software Developer</h3>
            <h4 className="header--link"><a href="https://reginaldwong.com" target="_blank">reginaldwong.com</a></h4>
            <button><a href="mailto:reginaldwongdev@gmail.com">Email</a></button>
        </header>
    )
}

export default Info;