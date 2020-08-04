import React from 'react';

function SingleRecipe (props){
    console.log(props.userRecipes);
    const recipe = props.userRecipes.find(oneRecipe =>{
        return props.id === oneRecipe._id
    })
    // console.log(recipe);
    // console.log(props.userRecipes);
    // console.log(props.id);
    return(
        <div>
            {recipe && (
                <div>
                    <h1>Single Recipe</h1>
                    <h1>{recipe.recipeName}</h1>
                    <button id = "submit" onClick={() => props.deleteRecipe(recipe._id)}>Delete</button>

                <div className = "Recipe-Container2" >
                    <p className = "Category">Category: {recipe.category}</p>
                    <p className = "Recipe-Name">Category: {recipe.recipeName}</p>
                    <p className = "Ingredients">Ingredients: {recipe.ingredients}</p>
                    <p className = "Cook Time"> Cook Time: {recipe.cookTime}</p>
                    <p className = "Rating">Rating: {recipe.rating}</p>
                    <p className = "Image">Image: {recipe.image}</p>
                    <p className = "Instructions">Instructions: {recipe.instructions}</p>
                </div> 
                </div>
       
            )}
        </div>
    )

        

}



export default SingleRecipe;