import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__Title">
        Женская одежда <br/> <span className="Header__Span">оптом</span> и по системе{" "}
        <span className="Header__Span">дропшиппинг</span>
      </h1>
    </header>
  );
};
