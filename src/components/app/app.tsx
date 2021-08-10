import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import {
  FeedPage,
  ForgotPasswordPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  ProfilePageLayout,
  RegisterPage,
  IngredientPage,
  ResetPasswordPage,
} from "../../pages";
import { ProtectedRoutePassword } from "../protected-route/protected-route-pass";
import { ProtectedRoute } from "../protected-route/protected-route";
import { ProtectedRouteAuth } from "../protected-route/protected-route-auth";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/modal-types/ingredient-details/ingredient-details";
import { useDispatch } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { FeedDetails } from "../modal/modal-types/feed-order-details/feed-order-details";
import { FeedDetailsPage } from "../../pages/feed-order/feed-order-page";
import {RootState, TBurgerIngredient, TLocation, useSelector} from "../../types/types";

const App: React.FC = () => {
  const location = useLocation<TLocation>();
  const history = useHistory();
  const dispatch = useDispatch();

  const background =
    (history.action === "PUSH" || history?.action === "REPLACE") &&
    location?.state?.background;

  const onModalClose = () => {
    history.goBack();
  };

  const { ingredientsData, isLoading } = useSelector<{ingredientsData: TBurgerIngredient[], isLoading: boolean}>(
    (store: RootState) => store.burgerIngredientsReducer
  );
  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <AppHeader />
        <Switch location={background || location}>
          <Route exact path="/">
            {!isLoading && !!ingredientsData?.length && <MainPage />}
          </Route>
          <ProtectedRouteAuth exact path="/login">
            <LoginPage />
          </ProtectedRouteAuth>
          <ProtectedRouteAuth exact path="/register">
            <RegisterPage />
          </ProtectedRouteAuth>
          <ProtectedRouteAuth exact path="/forgot-password">
            <ForgotPasswordPage />
          </ProtectedRouteAuth>
          <ProtectedRoutePassword exact path="/reset-password">
            <ResetPasswordPage />
          </ProtectedRoutePassword>
          <Route exact path="/feed">
            <FeedPage />
          </Route>
          <ProtectedRoute exact path="/profile">
            <ProfilePageLayout />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/orders">
            <ProfilePageLayout />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/orders/:id">
            <FeedDetailsPage />
          </ProtectedRoute>
          <Route exact path="/ingredients/:id">
            <IngredientPage />
          </Route>
          <Route exact path="/feed/:id">
            <FeedDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        {background && (
          <Route path="/ingredients/:id" exact>
            <Modal header={"Детали ингредиента"} onClose={onModalClose}>
              <IngredientDetails />
            </Modal>
          </Route>
        )}
        {background && (
          <Route exact path="/feed/:id">
            <Modal
              onClose={onModalClose}
              header={location.state.header || "номер не найден"}
            >
              <FeedDetails />
            </Modal>
          </Route>
        )}
        {background && (
          <ProtectedRoute exact path="/profile/orders/:id">
            <Modal
              onClose={onModalClose}
              header={location.state.header || "номер не найден"}
            >
              <FeedDetails />
            </Modal>
          </ProtectedRoute>
        )}
      </>
    </div>
  );
};

export default App;
