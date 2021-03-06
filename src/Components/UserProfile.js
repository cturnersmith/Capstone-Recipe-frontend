import React, { Component } from 'react';
import CreateRecipe from './Recipes/CreateRecipe';
import Form from './Form';
import {withRouter} from 'react-router-dom';
import { render } from 'react-dom';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state={
            name: this.props.user.name || null,
            img:  this.props.user.img || null,
            username: this.props.user.username
        }

        }
        handleChange = (e) => {
            console.log(e.target.name, e.target.value);
            this.setState({
                [e.target.name]: e.target.value
            
            })
        }

    render () {

        console.log(this.props.userRecipes);
        return(
            <div>
        <h1 className = "profile">Welcome to The Buzy Mom Recipe App, {this.props.user.username} </h1>
        <p>Name: {this.props.user.name}</p>
        <p className = "pic">Profile Pic: {this.props.user.img}</p>
        <img src = {this.state.img} />
        <form className = "profile-form" onSubmit ={(e) => this.props.updateProfile(e, this.state)}>
                    <input type ="text" 
                    name = "name" 
                    value={this.state.name}
                    placeholder="name"  
                    onChange={this.handleChange}
                    />
                    <input type = "text" 
                    name= "username"
                    value= {this.state.username}
                    placeholder="image" 
                    onChange={this.handleChange}
                    />
                    <input type = "text" 
                    name= "img"
                    value= {this.state.img}
                    placeholder="Profile Pic" 
                    onChange={this.handleChange}
                    />
                    <input id="submit" type ="submit" value="Edit" />
                    </form>
                
                <br></br>

            
                
            

        
        
             
               <CreateRecipe handleSubmit = {this.props.createRecipe} /> 
               {this.props.userRecipes && this.props.userRecipes.map(recipe => {
                  return( <div className = "Recipe-Container" >
                   <p className = "category"> Recipe Name: {recipe.recipeName} </p>
                   <p></p> <img src={recipe.image} width="100px"/>
                   <p> Ingredients: {recipe.ingredients}</p>
                   <p> Cook Time: {recipe.cookTime}</p>
                   <p> Rating: {recipe.rating}</p>
                   <p> Instructions: {recipe.instructions} </p>
   
               </div>
                  )
               })}
               
            </div>
        )}
    
    }


    export default withRouter (UserProfile);