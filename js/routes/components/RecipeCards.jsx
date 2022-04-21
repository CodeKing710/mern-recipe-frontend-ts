"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import CardStyles from "./CardStyles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>;
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma"/>;
function RecipeCards({ image, source, id, summary, title, alt }) {
    return (<div className="card-container">
      <div className="w3-card-4" key={id}>
        <header>{title}</header>
        <img src={image} alt={alt}/>
        <div className="w3-container w3-center">
          <p>{summary}</p>
        </div>
        <button className="w3-button w3-blue" ref={source}>
          Go to recipe!
        </button>
        <button className="w3-button w3-green">Add to Favs</button>
      </div>
    </div>);
}
exports.default = RecipeCards;
