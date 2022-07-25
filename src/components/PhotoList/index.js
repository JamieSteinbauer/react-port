import React, { useState } from "react";
import Modal from "../Modal";

function PhotoList({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  

  const [photos] = useState([
    {
      name: "recipez",
      category: "group project",
      description:
        "A recipe generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB",
    },
    {
      name: "codingquiz",
      category: "javascript",
      description:
        "A simple application that showcases vanilla Javascript, HTML, and CSS",
    },
    {
      name: "scheduler",
      category: "api",
      description:
        "A website that uses third-party APIs to impliment a scheduler that allows users to save events for each hour of the day.",
    },
    {
      name: "weather",
      category: "api",
      description:
        "Using the OneWeather API, this application allows the user to search a city and receive the current weather and five day forecast for that city. When clicking the history buttons, the current weather information will show again.",
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/portfolio/${category}/${i}.png`.default)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
