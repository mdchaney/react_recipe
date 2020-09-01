import React from "react";
import { Link } from "react-router-dom";

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      instructions: "",
      image_url: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/recipes";
    const { name, ingredients, instructions, image_url } = this.state;

    if (name.length == 0 || ingredients.length == 0 || instructions.length == 0)
      return;

    const body = {
      name,
      ingredients,
      instructions: instructions.replace(/\n/g, "<br> <br>"),
      image_url
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/recipes/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe name</label>
                <input
                  type="text"
                  name="name"
                  id="recipeName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  id="recipeIngredients"
                  className="form-control"
                  required
                  onChange={this.onChange}
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
                  rows="5"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeImageUrl">Image URL</label>
                <input
                  type="url"
                  name="image_url"
                  id="recipeImageUrl"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Create Recipe
              </button>
              <Link to="/recipes" className="btn btn-secondary ml-2 mt-3">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;