import { Route, Redirect, Switch } from "react-router-dom";
import { useUserStore } from "./store";
import Login from "@/modules/Login/login";
import Home from "./modules/home/home";
import ErrorPage from "./modules/error/error-page";
import { FC } from "react";
const Main = () => {
  const { isAuthenticated } = useUserStore();
  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <PrivateRoute
        path="/"
        isAuthenticated={isAuthenticated}
        component={Home}
        exact
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
          : () => <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
};

export default Main;
