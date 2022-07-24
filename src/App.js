import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  
  const [categories] = useState([
    {
      name: "RecipEZ",
      description:
        "A recipe generator built using Javascript, Bulma, and twi APIs: Spoontacular and The Cocktail DB",
    },
    {
      name: "Coding Quiz",
      description:
        "A simple application that showcases vanilla Javascript, HTML, and CSS",
    },
    {
      name: "Work Day Scheduler",
      description:
        "A website that uses third-party APIs to impliment a scheduler that allows users to save events for each hour of the day.",
    },
    {
      name: "Weather Dashboard",
      description:
        "Using the OneWeather API, this application allows the user to search a city and receive the current weather and five day forecast for that city. When clicking the history buttons, the current weather information will show again.",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
