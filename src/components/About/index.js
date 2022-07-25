import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import profilePic from "../../assets/profile/picture.jpg";

function About() {
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <img src={profilePic} className="" style={{ width: "40%" }} alt="profile" />
            <p>Hi! I'm a fledgling web developer on the lookout to further my knowledge and experience. Click through my projects to see what I've worked on!</p>            
        </section>
    )
}

export default About;