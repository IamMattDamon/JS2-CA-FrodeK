import { getFavRecipes } from "./../utils/favRecipes.js";

export function renderRecipes(recipesToRender) {
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = "";

    const favourites = getFavRecipes();

    const favButton = document.querySelectorAll(".recipe i");

    favButton.forEach((button) => {
        button.addEventListener("click", handleClick);
        console.log(favButton);
    });

    favourites.forEach((recipe) => {
    let iClass = "far";

    const doesObjectExits = favourites.find(function (fav) {
        console.log(fav);

        return parseInt(fav.id) === recipe.id;
    });

    console.log(doesObjectExits);

    if (doesObjectExits) {
        iClass = "fa";
    }

    recipesToRender.forEach((recipe) => {
    recipeContainer.innerHTML += `<div class="recipe">
                                    <h3>${recipe.name}</h3>
                                    <p>${recipe.description}</p>
                                    <h4>Difficulty: ${recipe.difficulty}/10</h4>
                                    <a href="${recipe.link}">Link to recipe</a>
                                    <i class="${iClass} fa-heart" data-id="${recipe.id}" data-name="${recipe.name}"></i>
                                </div>`;
    });
})}

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const name = this.dataset.name;
    const id = this.dataset.id;

    const currentFavs = getFavRecipes();

    const recipeExists = currentFavs.find(function (fav) {
        return fav.name === name;
    });

    if (recipeExists === undefined) {
        const recipe = { name: name, id: id };
        currentFavs.push(recipe);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
    }
