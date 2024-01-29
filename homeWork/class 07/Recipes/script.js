let getData = (dataSrc) => {
    fetch(dataSrc
        ).then((result) => result.json()
        ).then((result) => {
            getRecipeInfo(result);
        })
}

let getRecipeInfo = input => {
    let recipes = input.recipes;
    console.log(recipes);

    // let allDesserts = recipes.filter(recipe => recipe.tags.map(tag => tag === 'Dessert'));
    // console.log(allDesserts);

    let recipeReview = recipes.filter(recipe => recipe.reviewCount > 30)
    .map(recipe => recipe.name);
    console.log('the names of recipes with more than 30 reviews');
    console.log(recipeReview);

    let allCinnamon = recipes.filter(recipe => findCinnamon(recipe.tags) === true);
    console.log(allCinnamon);
}

getData('https://dummyjson.com/recipes')