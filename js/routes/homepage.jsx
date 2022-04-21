"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import styling from '../../src/public/css/main.css';
const react_1 = __importStar(require("react"));
const RecipeCards_1 = __importDefault(require("./components/RecipeCards"));
function App() {
    const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;
    const [search, setSearch] = (0, react_1.useState)("");
    const [recipeData, setRecipeData] = (0, react_1.useState)([{
            title: "",
            imageUrl: "",
            image: "",
            id: 0,
            source: "",
            summary: ""
        }]);
    const [recipeSum, setRecipeSum] = (0, react_1.useState)([""]);
    const [query, setQuery] = (0, react_1.useState)([""]);
    const [id, setId] = (0, react_1.useState)([0]);
    (0, react_1.useEffect)(() => {
        getRecipeData();
        getRecipeSum();
    }, [query]);
    const getRecipeData = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APIKey}`);
        const data = yield response.json();
        setRecipeData(data.results);
        console.log(data.results);
    });
    const getRecipeSum = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.spoonacular.com/recipes/${id}/summary&apiKey=${APIKey}`);
        const _id = yield response.json();
        setRecipeSum(_id.summary);
        setId(_id.id);
        console.log(_id.summary);
    });
    const searchResults = (e) => {
        setSearch(e.toString());
    };
    const getSearch = (e) => {
        e.preventDefault();
        setQuery([search]);
        setSearch("");
    };
    return (<div className="App">
      <h1>Got Munchies?</h1>
      <div className="search-form">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-form" type="text" placeholder="lookin' for some munchies" value={search}/>
          <button type="submit" className="recipe">
            Munch Away
          </button>
        </form>
        <div className="recipe_cards">
          {recipeData.map((recipe) => (<RecipeCards_1.default title={recipe.title} image={recipe.image} alt={recipe.imageUrl} source={recipe.source} id={0} summary={""}/>))}
        </div>
      </div>
    </div>);
}
exports.default = App;
