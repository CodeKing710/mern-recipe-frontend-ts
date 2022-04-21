import React from "react";
// import CardStyles from "./CardStyles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />;

interface RecipeCardProps {
  image: string,
  source: string,
  id: number,
  summary: string,
  title: string,
  alt: string
}
function RecipeCards({ image, source, id, summary, title, alt }: RecipeCardProps) {
  return (
    <div className="card-container">
      <div className="w3-card-4" key={id}>
        <header>{title}</header>
        <img src={image} alt={alt} />
        <div className="w3-container w3-center">
          <p>{summary}</p>
        </div>
        <button className="w3-button w3-blue" ref={source}>
          Go to recipe!
        </button>
        <button className="w3-button w3-green">Add to Favs</button>
      </div>
    </div>
  );
}

export default RecipeCards;
