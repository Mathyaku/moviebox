import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";
import Movie from "./pages/Movie";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
