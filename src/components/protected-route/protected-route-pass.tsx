import {Route, Redirect, RouteProps} from "react-router-dom";
import React from "react";
import {useSelector} from "../../types/types";

export const ProtectedRoutePassword: React.FC<RouteProps> = ({ children, ...rest }) => {
    const { isLoggedIn } = useSelector((store) => store.authReducer);

    return (
        <Route
            {...rest}
            render={({ location }: any) => {
                return isLoggedIn || location.state.from !== "/forgot-password" ? (
                    <Redirect to="/" />
                ) : (
                    children
                );
            }}
        />
    );
}
