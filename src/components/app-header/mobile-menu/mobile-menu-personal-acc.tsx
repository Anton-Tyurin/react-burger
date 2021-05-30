import React, { useState } from "react";
import style from "./mobile-menu-items.module.css";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ArrowUp from "../../../images/arrow-up.png";
import ArrowDown from "../../../images/arrow-down.png";

function MobileMenuPersonalAcc() {
  const [isPersonalListOpened, togglePersonalListOpened] = useState(false);
  const subItemClasses = "text text_type_main-default mb-2";
  return (
    <>
      <li
        style={{ justifyContent: "space-between" }}
        onClick={() => togglePersonalListOpened(!isPersonalListOpened)}
        className={`${style.mobileItem} text text_type_main-default pl-2 pt-3 pr-2 pb-3`}
      >
        <div>
          <ProfileIcon type={"primary"} />
          <span className={`pl-3 ${style.mobileItemHeading}`}>
            Личный кабинет
          </span>
        </div>
        <div>
          {isPersonalListOpened ? (
            <img src={ArrowUp} alt="arrow up" />
          ) : (
            <img src={ArrowDown} alt="arrow down" />
          )}
        </div>
      </li>
      {isPersonalListOpened && (
        <ul className={`${style.mobileSumItemsGroup} pb-2`}>
          <li className={subItemClasses}>Персональные данные</li>
          <li className={`${subItemClasses} text_color_inactive`}>Заказы</li>
          <li className={`${subItemClasses} text_color_inactive`}>Выход</li>
        </ul>
      )}
    </>
  );
}

export default MobileMenuPersonalAcc;
