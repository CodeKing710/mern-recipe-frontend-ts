"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardStyles_css_1 = __importDefault(require("./CardStyles.css"));
// import "bootstrap/dist/css/bootstrap.min.css";
rel;
"stylesheet";
href = "https://www.w3schools.com/w3css/4/w3.css" /  > ;
rel;
"stylesheet";
href = "https://fonts.googleapis.com/css?family=Karma" /  > ;
function RecipeCards(_a) {
    var image = _a.image, source = _a.source, id = _a.id, summary = _a.summary, title = _a.title, imageUrl = _a.imageUrl;
    return className = "card-container";
    style = { CardStyles: CardStyles_css_1.default } >
        className;
    "w3-card-4";
    key = { id: id };
    style = { CardStyles: CardStyles_css_1.default } >
        style;
    {
        CardStyles_css_1.default;
    }
     > { title: title } < /header>
        < img;
    src = { image: image };
    alt = { imageUrl: imageUrl } /  >
        className;
    "w3-container w3-center" >
        { summary: summary } < /p>
        < /div>
        < button;
    className = "w3-button w3-blue";
    href = { source: source } >
        Go;
    to;
    recipe
        < /button>
        < button;
    className = "w3-button w3-green" > Add;
    to;
    Favs < /button>
        < /div>
        < /div>;
    ;
}
exports.default = RecipeCards;
