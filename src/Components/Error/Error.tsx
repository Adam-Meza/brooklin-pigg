import React from "react";
import laptop from "../../assets/laptop-bk.jpg";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-wrapper">
      <img className="error-img" src={laptop} />
      <h2>
        <a href="/"> Looks like you're lost... :)</a>
      </h2>
    </div>
  );
};

export default Error;
