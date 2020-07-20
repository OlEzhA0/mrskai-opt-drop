import React from "react";
import "./Options.scss";
import { CoopOption } from "../CoopOption";

export const Options = () => {
  return (
    <div className="Options" id="opt">
      <div className="Options__Preview">
        <p className="Options__PreviewText">
          Оптовое предложение для магазинов
        </p>
      </div>
      <div className="Options__Opt">
        <CoopOption
          title="от 10 и до 500+ ед."
          text="вы получаете оптовые цены. Чем больше количество, тем ниже стоимость единицы"
        />
        <CoopOption
          title="Неограниченный"
          text="выбор изделий. Вы можете заказывать не только товары из каталога, а и присылать свои фото для изготовления"
        />
        <CoopOption
          title="Украинское"
          text="производство. Только портные с опытом работы 10+ лет"
        />
        <img src="images/ok.svg" alt="mrs" className="Options__Img" />
      </div>
    </div>
  );
};
