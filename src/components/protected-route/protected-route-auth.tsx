import { Route, Redirect, RouteProps } from "react-router-dom";
import React from "react";
import { useSelector } from "../../types/types";

export const ProtectedRouteAuth: React.FC<RouteProps> = ({
  children,
  ...rest
}) => {
  const { isLoggedIn } = useSelector((store) => store.authReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};
