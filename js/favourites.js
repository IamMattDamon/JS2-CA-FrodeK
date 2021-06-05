import { getFavRecipes } from "./utils/favRecipes.js";

const favourites = getFavRecipes();

const recipeContainer = document.querySelector(".recipe-container");

if (favourites.length === 0) {
    recipeContainer.innerHTML = "No favourite recipes selected";
}

favourites.forEach((favourite) => {
    recipeContainer.innerHTML += 
                                `<div class="recipe">
                                <h3>${favourite.name}</h3>
                                <h4>${favourite.description}</h4>
                                <h4>Difficulty: ${favourite.difficulty}/10</h4>
                                <a href="${favourite.link}" target="_blank">Link to recipe</a>
                                <i class="fa fa-heart"></i>
                                </div>`;
});