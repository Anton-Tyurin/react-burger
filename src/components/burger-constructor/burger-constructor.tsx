import React, { useState, useEffect } from "react";
import style from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../modal/modal-types/order-details/order-details";
import BurgerConstructorItems from "./items/burger-constructor-items";
import BurgerConstructorPrice from "./burger-constructor-price";
import { useDrop } from "react-dnd";
import {
  addNewConstructorIngredient,
  BURGER_CONSTRUCTOR_DELETE_ALL,
} from "../../services/actions/burger-constructor";
import {
  getOrderNumber,
  ORDER_NUMBER_DELETE,
} from "../../services/actions/order-details";
import { useHistory } from "react-router-dom";
import {
  RootState,
  TBurgerIngredient,
  useDispatch,
  useSelector,
} from "../../types/types";

export const BurgerConstructor: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [orderPrice, setOrderPrice] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>();
  const { constructorBunsType, constructorIngredients } = useSelector<{
    constructorBunsType: TBurgerIngredient;
    constructorIngredients: TBurgerIngredient[];
  }>((store: RootState) => store.burgerConstructorReducer);
  const { orderNumber } = useSelector<{ orderNumber: number }>(
    (store: RootState) => store.orderDetailsReducer
  );
  const { isLoggedIn } = useSelector<{ isLoggedIn: boolean }>(
    (store: RootState) => store.authReducer
  );
  const history = useHistory();
  const constructorHasItems =
    constructorBunsType || !!constructorIngredients?.length;

  useEffect(() => {
    if (visible === false) {
      dispatch({ type: BURGER_CONSTRUCTOR_DELETE_ALL });
    }
  }, [visible]);

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      dispatch(addNewConstructorIngredient(item));
    },
  });

  const handleModalOpen = () => {
    isLoggedIn ? dispatch(getOrderNumber()) : history.push("/login");
    setVisible(true);
  };
  const handleCloseModal = () => {
    dispatch({ type: ORDER_NUMBER_DELETE });
    setVisible(false);
  };

  return (
    <section ref={dropTarget} className={`${style.burgerConstructor} mt-25`}>
      {constructorHasItems ? (
        <>
          <BurgerConstructorItems setOrderPrice={setOrderPrice} />
          <BurgerConstructorPrice
            orderPrice={orderPrice}
            openModal={handleModalOpen}
          />
          {orderNumber && visible && (
            <Modal onClose={handleCloseModal}>
              <OrderDetails />
            </Modal>
          )}
        </>
      ) : (
        <div
          className={`${style.ingredientsEmpty} text_type_main-default pl-4 pr-4`}
        >
          ???????????????????? ?????????????????????? ?????? ???????????????????????? ??????????????
        </div>
      )}
    </section>
  );
});

export default BurgerConstructor;
