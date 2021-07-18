import React from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
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

function App() {
  const location = useLocation();
  const history = useHistory();
  const background =
    (history.action === "PUSH" || history?.action === "REPLACE") &&
    location?.state?.background;

  const onModalClose = () => {
    history.goBack();
  };

  return (
    <div className="App">
      <>
        <AppHeader />
        <Switch location={background || location}>
          <Route exact path="/">
            <MainPage />
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
          <ProtectedRoute exact path="/profile/:id">
            <ProfilePageLayout />
          </ProtectedRoute>
          <Route exact path="/ingredients/:id">
            <IngredientPage />
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
      </>
    </div>
  );
}

export default App;
