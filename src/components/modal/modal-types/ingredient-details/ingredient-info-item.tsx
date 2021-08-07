import React from "react";
import style from "./ingredient-details.module.css";

type TProps = {
  heading: string;
  value: string;
};

const IngredientInfoItem: React.FC<TProps> = (props) => {
  const { heading, value } = props;
  return (
    <li className={`${style.detailsInfoItem} text_color_inactive`}>
      <span className={"mb-5 text text_type_main-default"}>{heading}</span>
      <span className="text text_type_digits-default text_color_inactive">
        {value}
      </span>
    </li>
  );
};

export default IngredientInfoItem;
