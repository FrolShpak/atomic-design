import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import OverviewPage from "./components/pages/OverviewPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/overview">
          <OverviewPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
