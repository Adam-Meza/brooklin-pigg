import React from "react";
import helmet from "../../assets/helmet.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-page-wrapper">
      <img className="about-headshot" src={helmet}></img>
      <section className="about-info-wrapper">
        <h2>About</h2>
        <p>&nbsp; Writer / Educator / NOT A GIRLS GIRL!</p>
        <p>
          &nbsp; Overcame downs syndrome to be a pretty great editor and solid
          Barbra Palvin impersonator. Dolores quaerat, tenetur dolorum placeat
          itaque, laborum eligendi ipsum, incidunt tempore saepe libero voluptas
          similique aspernatur consequatur facere! Asperiores sapiente nostrum
          obcaecati!
        </p>
        <p>
          &nbsp; Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dolores quaerat, tenetur dolorum placeat itaque, laborum eligendi
          ipsum, incidunt tempore saepe libero voluptas similique aspernatur
          consequatur facere! Asperiores sapiente nostrum obcaecati! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Ratione, eligendi!
        </p>
      </section>
    </section>
  );
};

export default About;
