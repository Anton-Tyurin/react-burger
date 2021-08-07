import {Route, Redirect, RouteProps} from "react-router-dom";
import { useSelector } from "../../types/types";
import React from "react";

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector((store) => store.authReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
