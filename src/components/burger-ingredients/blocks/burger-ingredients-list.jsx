import React from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";
import { Link, useLocation } from "react-router-dom";

const BurgerIngredientsList = React.forwardRef((props, ref) => {
  const { data, heading } = props;
  const location = useLocation();

  return (
    <div className="mb-2">
      <h3 ref={ref} className="text text_type_main-medium mb-6">
        {heading}
      </h3>
      <div className={`${style.blockBody} pl-4 pr-4`}>
        {data?.map((item) => {
          return (
            <Link
              key={item._id + "_link"}
              to={{
                pathname: `/ingredients/${item._id}`,
                state: { background: location },
              }}
            >
              <BurgerIngredientsCard key={item._id} cardData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
});

BurgerIngredientsList.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
  heading: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
