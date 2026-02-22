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
          Barbra Palvin impersonator.
        </p>
        <p>
          &nbsp; Brooklin Pigg is from Washington State and currently resides in
          Upstate New York. The “why” of life led her towards writing which then
          became the only form for her to construct some sort of sense out of
          anything. She is currently in progress on a novel-length nonfiction
          manuscript that connects friends, lovers, and family members to
          examine the relationship between expectation and desire.
        </p>
      </section>
    </section>
  );
};

export default About;
