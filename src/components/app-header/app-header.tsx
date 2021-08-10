import React, { useEffect, useState } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { TLocation, useSelector } from "../../types/types";

const AppHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>();
  const { isLoggedIn } = useSelector((store) => store.authReducer);
  const location = useLocation<TLocation>();

  const headerItemPadding = "pl-5 pt-4 pr-5 pb-4";

  useEffect(() => {
    if (location.pathname.includes("feed")) {
      setActiveItem("feed");
    } else if (location.pathname.includes("profile")) {
      setActiveItem("profile");
    } else {
      setActiveItem("constructor");
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`${style.header} pt-4 pb-4`}>
        <nav>
          <ul className={`${style.headerDesktop}`}>
            <li className={style.headerBlock}>
              <NavLink
                exact
                to="/"
                className={`${headerItemPadding} ${style.headerItem} ${
                  activeItem !== "constructor" && "text_color_inactive"
                } text text_type_main-default`}
              >
                <BurgerIcon type={"primary"} />
                <span className={`pl-2`}>Конструктор</span>
              </NavLink>
              <NavLink
                exact
                to="/feed"
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <ListIcon type={"secondary"} />
                <span
                  className={`pl-2 ${
                    activeItem !== "feed" && "text_color_inactive"
                  }`}
                >
                  Лента заказов
                </span>
              </NavLink>
            </li>
            <li className={`${style.headerBlock} ${style.headerLogo}`}>
              <NavLink
                exact
                to="/"
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <Logo />
              </NavLink>
            </li>
            <li
              className={`${style.headerBlock} ${style.headerPersonalAccount}`}
            >
              <NavLink
                exact
                to={isLoggedIn ? "/profile" : "/login"}
                className={`${headerItemPadding} ${style.headerItem}`}
              >
                <ProfileIcon type={"secondary"} />
                <span
                  className={`pl-2 ${
                    activeItem !== "profile" && "text_color_inactive"
                  }`}
                >
                  Личный кабинет
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
