import React from "react";
import style from "./ingredient-page.module.css";
import PropTypes from "prop-types";

function IngredientPageInfoItem(props) {
  const { heading, value } = props;
  return (
    <li className={`${style.detailsInfoItem} text_color_inactive`}>
      <span className={"mb-5 text text_type_main-default"}>{heading}</span>
      <span className="text text_type_digits-default text_color_inactive">
        {value}
      </span>
    </li>
  );
}

IngredientPageInfoItem.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default IngredientPageInfoItem;
