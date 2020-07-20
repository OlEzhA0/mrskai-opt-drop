import React from "react";
import "./Buttons.scss";

interface Props {
  imgLink: string;
  link: string;
  text: string;
  background: string;
}

export const Buttons: React.FC<Props> = ({
  link,
  imgLink,
  text,
  background,
}) => (
  <a className="Buttons" style={{ background }} href={link}>
    <img src={imgLink} alt="social network" className="Buttons__Images" />
    <p className="Buttons__Text">{text}</p>
  </a>
);
