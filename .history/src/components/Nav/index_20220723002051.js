import React from 'react';

function Nav() {
    const projects = [
        {
            name: "RecipEZ",
            description:
            "A recipt generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB"
        },
        {
            name: "Coding Quiz",
            description: "A simple application that showcases vanilla Javascript, HTML, and CSS"
        },
        {
            name: "Social Network API",
            description: "Using MongoDB and Express.js, created a social network API that allows users to share their thoughts, react to friends' thoughts, and create a friend list."
        }
    ]

    function projectSelected(name) {
        console.log(`${name} clicked`);
    }

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
                    {projects.map((project) => (
                        <li className="mx-1"
                        key={project.name}
                        >
                            <span onClick={() => projectSelected(project.name)}>
                                {project.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;