import React from "react";
import "./Footer.scss";

export const Footer = () => (
  <footer className="Footer">
    <p className="Footer__CopyRight">
      © Mrs. Kai <br /> Все права защищены
    </p>
    <img src="images/flower.svg" alt="flower" className="Footer__FlowerImg" />
    <img src="images/bag.svg" alt="bag" className="Footer__BagImg" />
  </footer>
);
