import React from "react";
import style from "./ingredient-details.module.css";
import PropTypes from "prop-types";

function IngredientInfoItem(props) {
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

IngredientInfoItem.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default IngredientInfoItem;
