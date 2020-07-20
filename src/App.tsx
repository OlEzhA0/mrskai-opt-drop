import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Terms } from "./components/Terms";
import { Interest } from "./components/Interest";
import { Cooperation } from "./components/Cooperation";
import { Buttons } from "./components/Buttons";
import { Options } from "./components/Options";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Terms />
      <Interest />
      <Cooperation />
      <Buttons
        background="#5AA1F8"
        link="https://t.me/mrskai_drop"
        imgLink="images/tg.svg"
        text="ПЕРЕЙТИ В КАТАЛОГ - TELEGRAM"
      />
      <Options />
      <Buttons
        background="#5AA1F8"
        link="https://t.me/mrskai_drop"
        imgLink="images/tg.svg"
        text="ПЕРЕЙТИ В КАТАЛОГ - TELEGRAM"
      />
      <Buttons
        background="linear-gradient(82.53deg, #E7B363 0%, #C64563 45.83%, #8243B6 100%)"
        link="https://www.instagram.com/mrskai.com.ua/"
        imgLink="images/inst.svg"
        text="ПЕРЕЙТИ В КАТАЛОГ - INSTAGRAM"
      />
      <Buttons
        background="#725EDC"
        link="viber://add?number=380638911817"
        imgLink="images/viber.svg"
        text="НАПИСАТЬ В VIBER"
      />
      <Footer />
    </div>
  );
};

export default App;
