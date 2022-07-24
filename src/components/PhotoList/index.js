import React, { useState } from 'react';


function PhotoList({ category }) {

    const [photos] = useState([
        {
            name: "RecipEZ",
            category: "group project",
            description:
            "A recipe generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB"
        },
        {
            name: "Coding Quiz",
            category: "javascript",
            description:
                "A simple application that showcases vanilla Javascript, HTML, and CSS"
        },
        {
            name: "Work Day Scheduler",
            category: "api",
            description:
                "A website that uses third-party APIs to impliment a scheduler that allows users to save events for each hour of the day."
        },
        {
            name: "Weather Dashboard",
            category: "api",
            description: 
                "Using the OneWeather API, this application allows the user to search a city and receive the current weather and five day forecast for that city. When clicking the history buttons, the current weather information will show again."
        }
    ])

    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/portfolio/javascript/codingquiz.png`.default)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoList;