export const BURGER_CONSTRUCTOR_UPDATE = "BURGER_CONSTRUCTOR_UPDATE";
export const BURGER_CONSTRUCTOR_DELETE_ALL = "BURGER_CONSTRUCTOR_DELETE";

const getUnquieNumber = () => {
  return Date.now();
};

export const addNewConstructorIngredient = (item) => {
  return function(dispatch, getState) {
    const getSelfKey = () => {
      return `${item._id}_${getUnquieNumber()}`;
    };
    if (item.type !== "bun") {
      item.unquieKey = getSelfKey();
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

export const removeConstructorIngredient = (itemUnquieKey) => {
  return (dispatch, getState) => {
    const constructor = getState().burgerConstructorReducer;
    const constructorIngredientsUpdated = [
      ...constructor.constructorIngredients,
    ];

    const removedIngredient = constructorIngredientsUpdated.findIndex(
      (item) => item?.unquieKey === itemUnquieKey
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

export const moveIngredients = (dragIndex, hoverIndex) => {
  return (dispatch, getState) => {
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
