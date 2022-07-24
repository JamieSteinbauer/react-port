import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [projects] = useState([
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
      name: "Social Network API",
      description:
        "Using MongoDB and Express.js, created a social network API that allows users to share their thoughts, react to friends' thoughts, and create a friend list.",
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      ></Nav>
      <main>
        <div>
          <Portfolio />
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
