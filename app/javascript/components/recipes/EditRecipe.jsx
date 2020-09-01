import React from "react";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";

class EditRecipe extends React.Component {
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
    const { name, ingredients, instructions, image_url } = this.state;

    if (name.length == 0 || ingredients.length == 0 || instructions.length == 0)
      return;

    const url = `/api/v1/recipes/${this.props.match.params.id}`;

    const body = {
      recipe: {
        name,
        ingredients,
        instructions: instructions.replace(/\n/g, "<br> <br>"),
        image_url
      }
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "PUT",
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

  componentDidMount() {
    const url = `/api/v1/recipes/${this.props.match.params.id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ ...response }))
      .catch(() => this.props.history.push("/recipes"));
  }

  render() {
    return (
      <RecipeForm onSubmit={this.onSubmit} onChange={this.onChange} recipe={this.state} button_label="Update Recipe" cancel_action={`/recipes/${this.props.match.params.id}`} />
    );
  }
}

export default EditRecipe;
