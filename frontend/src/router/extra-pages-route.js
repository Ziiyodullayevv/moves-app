import { Switch, Route } from "react-router-dom";

import Login from "../views/backend/pages/auth/login";

const ExtraPages = () => {
  return (
    <Switch>
      <Route path="/extra-pages/login" component={Login} />
    </Switch>
  );
};

export default ExtraPages;
