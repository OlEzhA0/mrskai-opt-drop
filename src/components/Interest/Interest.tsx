import React from "react";
import "./Interest.scss";

export const Interest = () => {
  return (
    <div className="Interest">
      <div className="Interest__Container">
        <h2 className="Interest__Text">Что вас интересует?</h2>
        <a href="#drop" className="Interest__Anchor">
          Дропшиппинг
        </a>
        <a href="#opt" className="Interest__Anchor">
          ОПТ
        </a>
      </div>

      <img
        src="images/question.svg"
        alt="question"
        className="Interest__QuestBig"
      />
      <img
        src="images/question.svg"
        alt="question"
        className="Interest__QuestLittle"
      />
    </div>
  );
};
