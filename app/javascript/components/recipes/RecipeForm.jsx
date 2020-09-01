import React from "react";
import { Link } from "react-router-dom";

export default function RecipeForm(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new recipe to our awesome recipe collection.
          </h1>
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe name</label>
              <input
                type="text"
                name="name"
                value={props.recipe.name}
                id="recipeName"
                className="form-control"
                required
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeIngredients">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                value={props.recipe.ingredients}
                id="recipeIngredients"
                className="form-control"
                required
                onChange={props.onChange}
              />
              <small id="ingredientsHelp" className="form-text text-muted">
                Separate each ingredient with a comma.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="instructions">Preparation Instructions</label>
              <textarea
                className="form-control"
                id="instructions"
                name="instructions"
                value={props.recipe.instructions}
                rows="5"
                required
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeImageUrl">Image URL</label>
              <input
                type="url"
                name="image_url"
                id="recipeImageUrl"
                value={props.recipe.image_url}
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              {props.button_label}
            </button>
            <Link to={props.cancel_action} className="btn btn-secondary ml-2 mt-3">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
