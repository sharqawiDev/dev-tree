import { Route, Redirect, Switch } from "react-router-dom";
import { useUserStore } from "./store";
import Login from "@/modules/Login/login";
import Home from "./modules/home/home";
import ErrorPage from "./modules/error/error-page";
import { FC } from "react";
import Register from "./modules/Register/register";
import {
  homeURL,
  linksURL,
  loginURL,
  profileDetailsURL,
  registerRUL,
} from "./data/routes";
const Main = () => {
  const { isAuthenticated } = useUserStore();
  return (
    <Switch>
      <Route path={loginURL} render={() => <Login />} />
      <Route path={registerRUL} render={() => <Register />} />
      <Redirect exact from="/" to={homeURL} />
      <PrivateRoute
        path={homeURL}
        isAuthenticated={isAuthenticated}
        component={Home}
        exact
      />
      <PrivateRoute
        path={linksURL}
        isAuthenticated={isAuthenticated}
        component={Home}
      />
      <PrivateRoute
        path={profileDetailsURL}
        isAuthenticated={isAuthenticated}
        component={Home}
      />
      <Route path="*" render={() => <ErrorPage />} />
    </Switch>
  );
};

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: {
  component: FC;
  isAuthenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}) => {
  return (
    <Route
      {...rest}
      render={
        isAuthenticated
          ? () => <Component {...rest} />
          : () => <Redirect to={{ pathname: loginURL }} />
      }
    />
  );
};

export default Main;
