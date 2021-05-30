import React from "react";
import style from "./mobile-menu-items.module.css";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function MobileMenuOrdersList() {
  return (
    <li
      className={`${style.mobileItem}  text text_type_main-default pl-2 pr-2 pb-3`}
    >
      <ListIcon type={"secondary"} />
      <span className={`pl-3 text_color_inactive ${style.mobileItemHeading}`}>
        Лист Заказов
      </span>
    </li>
  );
}

export default MobileMenuOrdersList;
