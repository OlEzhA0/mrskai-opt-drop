import React from "react";
import "./Cooperation.scss";
import { CoopOption } from "../CoopOption";

export const Cooperation = () => (
  <div className="Cooperation" id="drop">
    <div className="Cooperation__Preview">
      <p className="Cooperation__PreviewText">
        Сотрудничество <br /> по системе дропшиппинг
      </p>
      <img
        src="images/hands.svg"
        alt="mrs with hand"
        className="Cooperation__PreviewImg"
      />
    </div>
    <div className="Cooperation__Options">
      <CoopOption title="до 400 грн" text="заработок на каждом товаре" />
      <CoopOption
        title="1-4 дня"
        text="период изготовления, а значит всегда всё в наличии"
      />
      <CoopOption
        title="Выплаты"
        text="на 2-й день, после получения посылки покупателем"
      />
      <CoopOption title="Возврат/Обмен" text="есть" />
      <CoopOption
        title="Не кладем"
        text="свои контакты в посылку, а также не пришиваем свои бирки"
      />
    </div>
  </div>
);
