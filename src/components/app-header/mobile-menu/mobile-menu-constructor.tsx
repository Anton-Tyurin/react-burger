import React from "react";
import style from "./mobile-menu-items.module.css";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function MobileMenuBurgers() {
  return (
    <li
      className={`${style.mobileItem}  text text_type_main-default pl-2 pt-3 pr-2 pb-3`}
    >
      <BurgerIcon type={"secondary"} />
      <span className={`pl-3 text_color_inactive ${style.mobileItemHeading}`}>
        Конструктор Бургеров
      </span>
    </li>
  );
}

export default MobileMenuBurgers;
