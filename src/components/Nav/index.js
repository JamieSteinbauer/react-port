import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);


    return(
        <header className="flex-row px-1">
            <h2>
                <a datatesid="link" href="/">
                    Jamie Steinbauer
                </a>
            </h2>
            <nav>
                <ul className ="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name
                        }`}
                        key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;