"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_css_1 = __importDefault(require("../public/css/main.css"));
var react_1 = require("react");
function App() {
    var _this = this;
    var APIKey = process.env.REACT_APP_SPOONACULAR_KEY;
    var _a = (0, react_1.useState)(""), search = _a[0], setSearch = _a[1];
    var _b = (0, react_1.useState)([]), recipeData = _b[0], setRecipeData = _b[1];
    var _c = (0, react_1.useState)([]), recipeSum = _c[0], setRecipeSum = _c[1];
    var _d = (0, react_1.useState)([]), query = _d[0], setQuery = _d[1];
    var _e = (0, react_1.useState)([]), id = _e[0], setId = _e[1];
    (0, react_1.useEffect)(function () {
        getRecipeData();
        getRecipeSum();
    }, [query]);
    var getRecipeData = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(
                    //`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APIKey}`
                    )];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setRecipeData(data.results);
                    console.log(data.results);
                    return [2 /*return*/];
            }
        });
    }); };
    var getRecipeSum = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(
                    // `https://api.spoonacular.com/recipes/${id}/summary&apiKey=${APIKey}`
                    )];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    id = _a.sent();
                    setRecipeSum(id.summary);
                    setId(data.id);
                    console.log(id.summary);
                    return [2 /*return*/];
            }
        });
    }); };
    var searchResults = function (e) {
        setSearch(e.target.value);
    };
    var getSearch = function (e) {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    return className = "App";
    style = { styling: main_css_1.default } >
        Got;
    Munchies ? /h1>
        < div : ;
    className = "search-form" >
        onSubmit;
    {
        getSearch;
    }
    className = "search-form" >
        className;
    "search-form";
    type = "text";
    placeholder = "lookin' for some munchies";
    value = { search: search };
    onChange = { searchResults: searchResults }
        /  >
        type;
    "submit";
    className = "recipe";
    onClick = {}(getRecipeData, getRecipeSum);
}
exports.default = App;
    >
        Munch;
Away
    < /button>
    < /form>
    < div;
className = "recipe_cards" >
    { recipeData: recipeData, : .map(function (recipe) { return title = { recipe: recipe, : .title }; }, image = { recipe: recipe, : .image }, alt = { recipe: recipe, : .imageUrl }, button = { recipe: recipe, : .source }
            /  >
        ) };
{
    recipeSum.map(function (recipe) { return id = { recipe: recipe, : .id.summary }; }, key = { recipe: recipe, : .id }
        /  >
    );
}
/div>
    < /div>
    < /div>;
;
