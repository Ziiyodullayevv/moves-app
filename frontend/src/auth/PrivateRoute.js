import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/extra-pages/login" />
      }
    />
  );
};

export default PrivateRoute;
