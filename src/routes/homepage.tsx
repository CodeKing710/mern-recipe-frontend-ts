// import styling from '../../src/public/css/main.css';
import React, { useState, useEffect, SetStateAction, FormEvent, ChangeEventHandler } from "react";
import RecipeCards from "./components/RecipeCards";

export default function App() {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const [search, setSearch] = useState("");
  const [recipeData, setRecipeData] = useState([{
    title: "",
    imageUrl: "",
    image: "",
    id: 0,
    source: "",
    summary: ""
  }]);
  const [recipeSum, setRecipeSum] = useState([""]);
  const [query, setQuery] = useState([""]);
  const [id, setId] = useState([0]);

  useEffect(() => {
    getRecipeData();
    getRecipeSum();
  }, [query]);

  const getRecipeData = async () => {
    const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APIKey}`
    );
    const data = await response.json();
    setRecipeData(data.results);
    console.log(data.results);
  };

  const getRecipeSum = async () => {
    const response: Response = await fetch(
     `https://api.spoonacular.com/recipes/${id}/summary&apiKey=${APIKey}`
     );
    const _id = await response.json();
    setRecipeSum(_id.summary);
    setId(_id.id);
    console.log(_id.summary);
  };

  const searchResults = (e: ChangeEventHandler<HTMLInputElement>) => {
    setSearch(e.toString());
  };

  const getSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery([search]);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Got Munchies?</h1>
      <div className="search-form">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-form"
            type="text"
            placeholder="lookin' for some munchies"
            value={search}
          />
          <button
            type="submit"
            className="recipe"
            // onClick={(getRecipeData, getRecipeSum)}
          >
            Munch Away
          </button>
        </form>
        <div className="recipe_cards">
          {recipeData.map((recipe) => (
            <RecipeCards
              title={recipe.title}
              image={recipe.image}
              alt={recipe.imageUrl}
              source={recipe.source} id={0} summary={""}            />
          ))}
        </div>
      </div>
    </div>
  );
}
