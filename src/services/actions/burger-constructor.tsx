import {
  AppDispatch,
  AppThunk,
  RootState,
  TBurgerIngredient,
} from "../../types/types";

export const BURGER_CONSTRUCTOR_UPDATE: "BURGER_CONSTRUCTOR_UPDATE" =
  "BURGER_CONSTRUCTOR_UPDATE";
export const BURGER_CONSTRUCTOR_DELETE_ALL: "BURGER_CONSTRUCTOR_DELETE_ALL" =
  "BURGER_CONSTRUCTOR_DELETE_ALL";

export interface IConstructorUpdate {
  readonly type: typeof BURGER_CONSTRUCTOR_UPDATE;
  updatedConstructor: TBurgerIngredient[];
}

export interface IConstructorDeleteAll {
  readonly type: typeof BURGER_CONSTRUCTOR_DELETE_ALL;
}

export type TConstructorActions = IConstructorUpdate | IConstructorDeleteAll;

const getUniqueNumber = () => {
  return Date.now();
};

export const addNewConstructorIngredient: AppThunk = (
  item: TBurgerIngredient
) => {
  return function(dispatch: AppDispatch, getState: RootState) {
    const getSelfKey = () => {
      return `${item._id}_${getUniqueNumber()}`;
    };
    if (item.type !== "bun") {
      item = { ...item, unquieKey: getSelfKey() };
    }
    const constructor = getState().burgerConstructorReducer;

    const updatedConstructor =
      item.type === "bun"
        ? { ...constructor, constructorBunsType: item }
        : {
            ...constructor,
            constructorIngredients: [
              ...constructor.constructorIngredients,
              item,
            ],
          };
    dispatch({
      type: BURGER_CONSTRUCTOR_UPDATE,
      updatedConstructor: updatedConstructor,
    });
  };
};

export const removeConstructorIngredient = (itemUniqueKey: string) => {
  return (dispatch: AppDispatch, getState: RootState) => {
    const constructor = getState().burgerConstructorReducer;
    const constructorIngredientsUpdated = [
      ...constructor.constructorIngredients,
    ];

    const removedIngredient = constructorIngredientsUpdated.findIndex(
      (item) => item?.unquieKey === itemUniqueKey
    );

    constructorIngredientsUpdated.splice(removedIngredient, 1);

    dispatch({
      type: BURGER_CONSTRUCTOR_UPDATE,
      updatedConstructor: {
        constructorIngredients: constructorIngredientsUpdated,
      },
    });
  };
};

export const moveIngredients = (dragIndex: number, hoverIndex: number) => {
  return (dispatch: AppDispatch, getState: RootState) => {
    const constructor = getState().burgerConstructorReducer;
    const constructorIngredientsUpdated = [
      ...constructor.constructorIngredients,
    ];
    const draggedElement = constructorIngredientsUpdated[dragIndex];
    constructorIngredientsUpdated.splice(dragIndex, 1);
    constructorIngredientsUpdated.splice(hoverIndex, 0, draggedElement);
    dispatch({
      type: BURGER_CONSTRUCTOR_UPDATE,
      updatedConstructor: {
        constructorIngredients: constructorIngredientsUpdated,
      },
    });
  };
};
