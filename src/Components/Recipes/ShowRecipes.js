import React, {Component} from 'react';
import { render } from 'react-dom';
import {getAllRecipes, getRecipebyId} from '../../services/api_helper'; 
import {Route, Link, withRouter}  from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
// import Form from './Form';




class ShowRecipes extends Component {
    constructor(props) {
        super(props);
    
        this.state= {
          recipes: []
        }
    }
    

getRecipebyId = async(recipeId) => {
    const recipe = await getRecipebyId(recipeId);

}
    render(){
     
    return (
        <div className = "recipes">
            <h1>Recipes</h1>
           {/* <Form /> */}
            {this.props.allRecipes && this.props.allRecipes.map(recipe => {
                return (<Link to={`/recipes/${recipe._id}`}>
                    <h3>{recipe.recipeName} </h3> 
                    <img src = {recipe.image} height="200px"/>
                </Link>
                
                )
            
                
                
            // return  <h2 onClick = {()=> 
            //         this.getRecipebyId(recipe.id)}>{recipe.recipeName} <img src={recipe.image} /></h2>
            // {this.props.recipes && this.props.recipes.map(recipe => {
            //     return <Link to={`/recipes/${recipe.id}`}><h3>{recipe.recipeName}</h3></Link>
            // })}

        
            
            
            })}
        
        </div>
    )
}
}

export default ShowRecipes;