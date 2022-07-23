import React from 'react';

function Nav() {
    const projects = [
        {
            name: "recipez",
            description:
            "A recipt generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB"
        },
        {
            name: "codingquiz",
            description: "A simple application that showcases vanilla Javascript, HTML, and CSS"
        },
        {
            name: "socialnetwork",
            description: "Using MongoDB and Express.js, created a social network API that allows users to share their thoughts, react to friends' thoughts, and create a friend list."
        }
    ]

    return(
        <header>
            <h2>
                <a href="/">
                    Hello there!
                </a>
            </h2>
            <nav>
                <ul className ="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;