import React, {Component} from 'react';
import './App.css';

import Form from './Components/Form';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import RegisterForm from './Components/Register';
import CreateRecipe from './Components/Recipes/CreateRecipe';
import UserProfile from './Components/UserProfile';
import AboutUs from './Components/AboutUs';
import {NavLink} from 'react-router-dom';
import Header from './Components/Header';
import SingleRecipe from './Components/Recipes/SingleRecipe';

import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, createRecipe, GetUserProfile, updateProfile, getAllRecipes, getAllRecipesbyUser, destroyRecipe} from './services/api_helper';
import ShowRecipes from './Components/Recipes/ShowRecipes';




class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userProfile: null,
        loggedIn: false, 
        // name: "",
        // username: "",
        // password: "",
        // email: "",
        // profilePic: ""
        userRecipes: null
      }
    }

    handleInput = async (e, user) => {
      e.preventDefault();
      const loadedUser = await loginUser(user);
      const userRecipes = await getAllRecipesbyUser(loadedUser._id)
      const allRecipes = await getAllRecipes();
      console.log(loadedUser);
      if (loadedUser) {
       
        this.setState({
          loggedIn:true,
          userProfile: loadedUser,
          userRecipes: userRecipes,
          allRecipes: allRecipes
        }) 
      this.props.history.push('/profile')
      }
    }

    handleRegister = async (e, user) => {
      e.preventDefault();
      const loadedUser = await registerUser(user);
  
      if (loadedUser) {
        this.setState({
          loggedIn:true,
          userProfile: loadedUser
        }) 
      this.props.history.push('/profile')
      }
    }

    createRecipe = async (e, recipeData) => {
      e.preventDefault();
      const newRecipe = await createRecipe(recipeData, this.state.userProfile._id);
      const userRecipes = await getAllRecipesbyUser(this.state.userProfile._id);
      const allRecipes = await getAllRecipes();
      console.log(newRecipe);
      this.setState({
        userRecipes: userRecipes,
        allRecipes: allRecipes
      })
     
    }

    getRecipes = async (e, recipeData) => {
      e.preventDefault();
      const allRecipes = await getAllRecipes();
      this.setState({
        allRecipes: allRecipes

      })
     
    }

    

    handleProfile = async (e, user) => {
      const loadedUser = await GetUserProfile();
      return loadedUser
    }

    updateProfile = async (e, profile) => {
      e.preventDefault();
      const userProfile = await updateProfile(this.state.userProfile._id, profile)
      console.log(userProfile);
      this.setState({
        userProfile: userProfile
      })
    }

    destroyRecipes = async (id) => {
      console.log(id);
      await destroyRecipe(id);
      const recipes = this.state.allRecipes
      const newRecipes = recipes.filter(recipe => {
        return recipe._id !== id
      })
    this.setState({allRecipes: newRecipes})
    this.props.history.push("/recipes")
      
  }




  


    

    // handleSignup = async (e, user) => {
    //   e.preventDefault();
    //   const registerUser = await registerUser(user);
    //   this.setState = ({
    //       loggedIn:true,
    //       user: registerUser
        
    //   })
    //   this.props.history.push('/profile')
    // }
  
    // handleLogin = async (e, user) => {
    //   e.preventDefault();
    //   const loadedUser = await loginUser(user);
    //   const userProfile = await this.handleProfile()
  
    //   if (loadedUser) {
    //     this.setState({
    //       loggedIn:true,
    //       userProfile: userProfile
    //     }) 
    //   }
    //   this.props.history.push('/profile');
    // }
  // }
  
  render() {
    console.log(this.state.userRecipes);
    return (

      <div className = "Search">

      <Header loggedIn = {this.state.loggedIn} />
        
        {/* <header className = "Header">
        <h1>Buzy Mom Recipes</h1>
        <nav className = "Nav">
            <NavLink to='/login'>Login</NavLink>
            <br></br>
            <NavLink to='/register'>Register Here</NavLink>
            <br></br>
            <NavLink to='/aboutus'>About Us</NavLink>
            <br></br>
            <NavLink to='/home'>Logout</NavLink>
            </nav>
        <h2>An app full of yummy recipes for the busy working mom</h2>
        
        </header>


        {/* <Route path = "/profile" render= {() => {
          return <Form getRecipe = {this.getRecipe}/>
        }} /> */} 

        <Route exact path = '/'><HomePage /></Route>

    

        <Route path = "/login" render= {() => {
            return <Login handleSubmit = {this.handleInput}/>
        }} />

        <Route path = "/register" render= {() => {
            return <RegisterForm handleSubmit = {this.handleRegister} />
        }} />

        <Route path = "/profile" render= {() => {
          return <UserProfile 
          user = {this.state.userProfile} 
          getUser = {this.state.GetUserProfile} 
          updateProfile = {this.updateProfile} 
          createRecipe = {this.createRecipe}
          userRecipes = {this.state.userRecipes}/>

        // <Route path = "/profile" render= {() => {
        //     return <CreateRecipe handleSubmit = {this.CreateRecipe} />
    
        }} />

        <Route path ="/recipes" render = {() => {
          return <ShowRecipes allRecipes = {this.state.allRecipes}/>
        }} />
{/* 
         <UserProfile handleSubmit = {this.CreateRecipe} username = {this.state.username} /> */}

    

       <Route path = "/aboutus" render= {() => {
         return  <AboutUs />
       }} />

      <Route path ="/recipes/:recipeid" render = {(props) => {
          return <SingleRecipe id = {props.match.params.recipeid} 
          userRecipes = {this.state.allRecipes} deleteRecipe = {this.destroyRecipes}/>
        }} />
     
      </div>
    );
  }
}
export default withRouter (App);
