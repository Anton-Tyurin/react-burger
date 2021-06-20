import React, { useState } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";
import MobileMenu from "./mobile-menu/mobile-menu";
import LogoMobile from "../../images/logo-mobile.png";
import MobileMenuBurger from "../../images/mobile-burger-menu.png";
function AppHeader() {
  const [isMobileMenuActive, toggleMobileMenu] = useState(false);
  const headerItemPadding = "pl-5 pt-4 pr-5 pb-4";
  return (
    <>
      <header className={`${style.header} pt-4 pb-4`}>
        <nav>
          <ul className={`${style.headerDesktop}`}>
            <li className={style.headerBlock}>
              <a
                href="#"
                className={`${headerItemPadding} ${style.headerItem} text text_type_main-default`}
              >
                <BurgerIcon type={"primary"} />
                <span className={`pl-2`}>Конструктор</span>
              </a>
              <a
                href="#"
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <ListIcon type={"secondary"} />
                <span className={`pl-2 text_color_inactive`}>
                  Лента заказов
                </span>
              </a>
            </li>
            <li className={`${style.headerBlock} ${style.headerLogo}`}>
              <a
                href="#"
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <Logo />
              </a>
            </li>
            <li
              className={`${style.headerBlock} ${style.headerPersonalAccount}`}
            >
              <a
                href="#"
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <ProfileIcon type={"secondary"} />
                <span className={`pl-2 text_color_inactive`}>
                  Личный кабинет
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <ul className={`${style.headerMobile} pl-3 pr-3`}>
          <li className={style.headerMobileItem}>
            <img height={40} width={40} src={LogoMobile} alt="logo-mobile" />
          </li>
          <li
            onClick={() => toggleMobileMenu(true)}
            className={style.headerMobileItem}
          >
            <img src={MobileMenuBurger} alt="logo-mobile" />
          </li>
        </ul>
      </header>
      {isMobileMenuActive && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
    </>
  );
}

export default AppHeader;
