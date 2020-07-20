import React from "react";
import "./CoopOption.scss";

interface Props {
  title: string;
  text: string;
}

export const CoopOption: React.FC<Props> = ({ title, text }) => (
  <div className="CoopOption">
    <h3 className="CoopOption__Title">{title}</h3>
    <p className="CoopOption__Text">{text}</p>
  </div>
);
