import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoutePassword({ children, ...rest }) {
    const { isLoggedIn } = useSelector((store) => store.authReducer);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isLoggedIn || location.state?.from !== "/forgot-password" ? (
                    <Redirect to="/" />
                ) : (
                    children
                );
            }}
        />
    );
}
