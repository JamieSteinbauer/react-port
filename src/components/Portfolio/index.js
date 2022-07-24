import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/portfolio/recipez.png";

function Portfolio(props) {
    const currentPortfolio = {
        name: "recipEZ",
        description:
            "A recipt generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB"
    }
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentPortfolio.name)}</h1>
            <p>{currentPortfolio.name}</p>
            <div>
                <img 
                    src={photo} 
                    alt="RecipEZ example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Portfolio;