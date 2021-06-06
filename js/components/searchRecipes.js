export function searchRecipes(recipes) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredRecipes = recipes.filter(function (recipe) {
            if (recipe.name.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        searchRecipes(filteredRecipes);
    };
}