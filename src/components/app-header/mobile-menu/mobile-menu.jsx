import React from "react";
import style from "./mobile-menu.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import MobileMenuPersonalAcc from "./mobile-menu-personal-acc";
import MobileMenuOrdersList from "./mobile-menu-orders-list";
import MobileMenuBurgers from "./mobile-menu-constructor";

function MobileMenu(props) {
  return (
    <section className={style.mobileMenu}>
      <div
        className={`${style.mobileHeading} text text_type_main-medium pl-3 pr-3 pt-4 mb-4`}
      >
        <h2 className={style.mobileHeader}>Меню</h2>
        <li onClick={() => props.toggleMobileMenu(false)}>
          <CloseIcon type="primary" />
        </li>
      </div>
      <nav>
        <MobileMenuPersonalAcc />
        <MobileMenuOrdersList />
        <MobileMenuBurgers />
      </nav>
    </section>
  );
}

export default MobileMenu;
