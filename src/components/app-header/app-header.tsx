import React, { useState } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";
import {
  ACTIVE_CONSTRUCTOR,
  ACTIVE_ORDERS,
  ACTIVE_PERSONAL_ACCOUNT,
} from "../../constants/constants";
import MobileMenu from "./mobile-menu/mobile-menu";
import LogoMobile from "../../images/logo-mobile.png";
import MobileMenuBurger from "../../images/mobile-burger-menu.png";
function AppHeader(props: any) {
  const { activeItem } = props;
  const [isMobileMenuActive, toggleMobileMenu] = useState(false);
  const headerItemPadding = "pl-5 pt-4 pr-5 pb-4";
  return (
    <>
      <header className={`${style.header} pt-4 pb-4`}>
        <div className={`${style.headerDesktop}`}>
          <div className={style.headerBlock}>
            <li
              className={`${headerItemPadding} ${style.headerItem} text text_type_main-default`}
            >
              <BurgerIcon
                type={
                  activeItem === ACTIVE_CONSTRUCTOR ? "primary" : "secondary"
                }
              />
              <span
                className={`pl-2
                             ${
                               activeItem !== ACTIVE_CONSTRUCTOR &&
                               "text_color_inactive"
                             }`}
              >
                Конструктор
              </span>
            </li>
            <li className={`${headerItemPadding} ${style.headerItem}`}>
              <ListIcon
                type={activeItem === ACTIVE_ORDERS ? "primary" : "secondary"}
              />
              <span
                className={`pl-2
                             ${
                               activeItem !== ACTIVE_ORDERS &&
                               "text_color_inactive"
                             }`}
              >
                Лента заказов
              </span>
            </li>
          </div>
          <div className={`${style.headerBlock} ${style.headerLogo}`}>
            <li className={`${headerItemPadding} ${style.headerItem}`}>
              <Logo />
            </li>
          </div>
          <div
            className={`${style.headerBlock} ${style.headerPersonalAccount}`}
          >
            <li className={`${headerItemPadding} ${style.headerItem}`}>
              <ProfileIcon
                type={
                  activeItem === ACTIVE_PERSONAL_ACCOUNT
                    ? "primary"
                    : "secondary"
                }
              />
              <span
                className={`pl-2
                             ${
                               activeItem !== ACTIVE_PERSONAL_ACCOUNT &&
                               "text_color_inactive"
                             }`}
              >
                Личный кабинет
              </span>
            </li>
          </div>
        </div>
        <div className={`${style.headerMobile} pl-3 pr-3`}>
          <li className={style.headerMobileItem}>
            <img height={40} width={40} src={LogoMobile} alt="logo-mobile" />
          </li>
          <li
            onClick={() => toggleMobileMenu(true)}
            className={style.headerMobileItem}
          >
            <img src={MobileMenuBurger} alt="logo-mobile" />
          </li>
        </div>
      </header>
      {isMobileMenuActive && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
    </>
  );
}

AppHeader.defaultProps = {
  activeItem: ACTIVE_CONSTRUCTOR,
};

export default AppHeader;
