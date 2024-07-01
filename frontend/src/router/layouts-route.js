import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Layout1 from "../layouts/backend/layout1";
import BlankLayout from "../layouts/blanklayout";
import Login from "../../src/components/SignIn";

const LayoutsRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const history = useHistory();

  // Agar token bo'lmasa, login sahifasiga o'tish
  if (!token && location.pathname !== "/login") {
    history.push("/login");
  }

  return (
    <Switch location={location}>
      <Route path="/login" component={Login} />
      {token ? (
        <>
          <Route path="/extra-pages" component={BlankLayout} />
          <Route path="/" component={Layout1} />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  );
};

export default LayoutsRoute;
