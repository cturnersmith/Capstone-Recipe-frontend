import React from 'react';

function SingleRecipe (props){
    console.log(props.userRecipes);
    const recipe = props.userRecipes.find(oneRecipe =>{
        return props.id === oneRecipe._id
    })
  
    return(
        <div>
            {recipe && (
                <div>
                    <h1>{recipe.recipeName}</h1>
                    <h2>{recipe.image}</h2>
                    <button id = "submit" onClick={() => props.deleteRecipe(recipe._id)}>Delete</button>

                <div className = "Recipe-Container" >
                    {/* <p className = "Category">Category: {recipe.category}</p> */}
                    <p className = "Recipe-Name">Recipe Name: {recipe.recipeName}</p>
                    <p className = "Ingredients">Ingredients: {recipe.ingredients}</p>
                    <p className = "Cook Time"> Cook Time: {recipe.cookTime}</p>
                    <p className = "Rating">Rating: {recipe.rating}</p>
                    <img src = {recipe.image} height="200px" />
                    <p className = "Instructions">Instructions: {recipe.instructions}</p>
                </div> 
                </div>
       
            )}
        </div>
    )

        

}



export default SingleRecipe;