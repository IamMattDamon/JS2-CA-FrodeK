import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { renderRecipes } from "./components/renderRecipes.js";
import { searchRecipes } from "./components/searchRecipes.js";

const recipesUrl = baseUrl + "recipes";

export async function getRecipes() {
    try {
        const response = await fetch(recipesUrl);
        const json = await response.json();

        const recipes = json;

        renderRecipes(recipes);
        searchRecipes(recipes);

    } catch (error) {
            console.log(error);
            displayMessage("error", error, ".recipe-container");
    }
}

getRecipes();

