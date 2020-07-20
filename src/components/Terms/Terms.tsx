import React from "react";
import "./Terms.scss";

export const Terms = () => {
  return (
    <div className="Terms">
      <ul className="Terms__List">
        <li className="Terms__Item">
          <div className="Terms__Dot" />{" "}
          <p className="Terms__ItemText "> дропшиппинг маржа до 50%</p>
        </li>
        <li className="Terms__Item">
          <div className="Terms__Dot" />
          <p className="Terms__ItemText">опт от 10 ед.</p>
        </li>
      </ul>
      <img src="images/preview.svg" alt="preview" className="Terms__Img" />
      <img src="images/arrows.svg" alt="arrows" className="Terms__Arrows" />
    </div>
  );
};
