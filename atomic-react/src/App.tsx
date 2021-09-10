import { Route, BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./constants/routes";

const App = () => {
  const [landingRoute, overviewRoute] = routes;
  console.log(landingRoute);
  console.log(overviewRoute);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={landingRoute.path}>
          {landingRoute.component}
        </Route>
        <Route path={overviewRoute.path}>{overviewRoute.component}</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
