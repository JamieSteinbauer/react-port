import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  
  const [categories] = useState([
    {
      name: "Javascript",
      description:
        "By using Javascript, I can create logic on the front end that allows users to interact with the application.",
    },
    {
      name: "API's",
      description: "APIs are aplenty and are easily able to be implemented into an application."
    },
    {
      name: "Group Projects",
      description: "Focusing on collaboration, group projects are a great way to showcase communication skills."
    }
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  
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
            <Project currentCategory={currentCategory}></Project>
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
