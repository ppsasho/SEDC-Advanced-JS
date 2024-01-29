let getData = (dataSrc) => {
    fetch(dataSrc
        ).then((result) => result.json()
        ).then((result) => {
            getRecipeInfo(result);
        })
}

let getRecipeInfo = input => {
    let recipes = [...input.recipes];

    let allDesserts = recipes.filter(
        recipe => recipe.tags.includes('Dessert') ||
        recipe.mealType.includes('Dessert'));
        console.log('All desserts:');
        console.log(allDesserts);

    let recipeReview = recipes.filter(recipe => recipe.reviewCount > 30)
    .map(recipe => recipe.name);
    console.log('the names of recipes with more than 30 reviews');
    console.log(recipeReview);

    let allCinnamon = recipes.filter(
        recipe => recipe.ingredients.includes('Cinnamon'));
        console.log('All recipes containing Cinnamon');
    console.log(allCinnamon);

    let lunchAndDinner = recipes.filter(recipe =>
        recipe.mealType.includes('Dinner') &&
         recipe.mealType.includes('Lunch') 
    );
    console.log('Recipes served at lunch and dinner');
    console.log(lunchAndDinner);

    let recipeIngredients = recipes.find(recipe => recipe.name === 'Mango Salsa Chicken');
    console.log('The ingredients needed for "Mango Salsa Chicken" dish');
    console.log(recipeIngredients.ingredients);

    let americanAvg = recipes.filter(recipe => recipe.cuisine === 'American');
    console.log('Calculate the average number of calories for all American cusine recipes');
    console.log(americanAvg[0].caloriesPerServing);

    let avgPasta = recipes.filter(recipe => recipe.tags.includes('Pasta'));
    let pastaTime = avgPasta.map(pasta => pasta.cookTimeMinutes).reduce((sum, item) => sum += item, 0);
    console.log('The average cooking time of all pasta recipes');
    console.log(pastaTime / avgPasta.length);

    let sortedRecipes = recipes.sort((recipe2, recipe1) => 
    recipe2.reviewCount - recipe1.reviewCount);
    console.log('The recipe with the lowest number of reviews');
    console.log(sortedRecipes[0]);
}

getData('https://dummyjson.com/recipes')