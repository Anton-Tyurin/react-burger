import style from "./profile.module.css";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_TO_INITIAL, logoutUser } from "../../services/actions/auth";

export function ProfileMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { successfulLogout } = useSelector((store) => store.authReducer);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    if (location.pathname.includes("orders")) {
      setActiveItem("orders");
    } else {
      setActiveItem("profile");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (successfulLogout) {
      dispatch({ type: AUTH_TO_INITIAL });
      history.push("/login");
    }
  }, [successfulLogout]);

  const handleAppExit = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  const getDescription = () => {
    switch (activeItem) {
      case "profile": {
        return "В этом разделе вы можете изменить свои персональные данные";
      }
      case "orders": {
        return "В этом разделе вы можете просмотреть свою историю заказов";
      }
      default: {
        return "Для данного раздела еще не написан вспомогательный текст";
      }
    }
  };

  return (
    <div>
      <nav className="mb-20">
        <ul className={`${style.profileMenu}`}>
          <li className={style.profileMenuItem}>
            <NavLink activeClassName={style.activeLink} exact to="/profile">
              <span className={`text text_type_main-medium`}>Профиль</span>
            </NavLink>
          </li>
          <li className={style.profileMenuItem}>
            <NavLink
              activeClassName={style.activeLink}
              exact
              to="/profile/orders"
            >
              <span className={`text text_type_main-medium`}>
                История заказов
              </span>
            </NavLink>
          </li>
          <li onClick={handleAppExit} className={style.profileMenuItem}>
            <span className={`text text_type_main-medium`}>Выход</span>
          </li>
        </ul>
      </nav>
      <div className="text text_color_inactive">{getDescription()}</div>
    </div>
  );
}
