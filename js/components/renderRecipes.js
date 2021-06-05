export function renderRecipes(recipesToRender) {
    const container = document.querySelector(".recipe-container");
    container.innerHTML = "";

    recipesToRender.forEach((recipe) => {
            container.innerHTML += `<div class="recipes">
                                        <h3>${recipe.name}</h3>
                                        <p>${recipe.description}</p>
                                        <h4>Difficulty: ${recipe.difficulty}/10</h4>
                                        <a href="${recipe.link}" target="_blank">Link to recipe</a>
                                        <i class="fa fa-heart"></i>
                                    </div>`;
        });
}