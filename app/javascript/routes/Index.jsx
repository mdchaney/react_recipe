import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/recipes/Recipes";
import Recipe from "../components/recipes/Recipe";
import NewRecipe from "../components/recipes/NewRecipe";
import EditRecipe from "../components/recipes/EditRecipe";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipes/new" exact component={NewRecipe} />
      <Route path="/recipes/:id" exact component={Recipe} />
      <Route path="/recipes/:id/edit" exact component={EditRecipe} />
    </Switch>
  </Router>
);
