import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRouteAuth({ children, ...rest }) {
    const { isLoggedIn } = useSelector((store) => store.authReducer);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}
