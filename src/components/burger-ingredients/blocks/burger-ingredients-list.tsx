import React, { MutableRefObject } from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import { Link, useLocation } from "react-router-dom";
import { TBurgerIngredient, TLocation } from "../../../types/types";

type TProps = {
  data: TBurgerIngredient[];
  heading: string;
  ref: MutableRefObject<HTMLDivElement | null>;
};

const BurgerIngredientsList: React.ForwardRefExoticComponent<React.PropsWithoutRef<TProps> & React.RefAttributes<unknown>> = React.forwardRef(
  (props: TProps, ref: any) => {
    const { data, heading } = props;
    const location = useLocation<TLocation>();

    return (
      <div className="mb-2">
        <h3 ref={ref} className="text text_type_main-medium mb-6">
          {heading}
        </h3>
        <div className={`${style.blockBody} pl-4 pr-4`}>
          {data?.map((item: TBurgerIngredient) => {
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
  }
);

export default BurgerIngredientsList;
