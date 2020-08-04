import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import '../App.js';
import {NavLink} from 'react-router-dom';
import CreateRecipe from './Recipes/CreateRecipe.js';



function HomePage (props) {
    return(


<div className = "All-Container" >
<div class="card-container">
  <div class="card u-clearfix">
    <div class="card-body">
      <span class="card-number card-circle subtle">01</span>
      <span class="card-author subtle">John Smith</span>
      <h2 class="card-title">New Chicken Recipe</h2>
      <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
      <div class="card-read">Read</div>
      <span class="card-tag card-circle subtle">C</span>
    </div>
    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
  </div>
  <div class="card-shadow"></div>
</div>

<div class="card-container2">
  <div class="card u-clearfix">
    <div class="card-body">
      <span class="card-number card-circle subtle">01</span>
      <span class="card-author subtle">John Smith</span>
      <h2 class="card-title">New Mac & Cheese Recipe</h2>
      <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
      <div class="card-read">Read</div>
      <span class="card-tag card-circle subtle">C</span>
    </div>
    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
  </div>
  <div class="card-shadow"></div>
</div>

<div class="card-container3">
  <div class="card u-clearfix">
    <div class="card-body">
      <span class="card-number card-circle subtle">01</span>
      <span class="card-author subtle">John Smith</span>
      <h2 class="card-title">New Peach Cobbler Recipe</h2>
      <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
      <div class="card-read">Read</div>
      <span class="card-tag card-circle subtle">C</span>
    </div>
    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
  </div>
  <div class="card-shadow"></div>
</div>
</div>


        // <div>
        // <div className = "pics">
        //     <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz2vMXT2Hofeg7MenAhTBB3j7ksehCQ-6zIw&usqp=CAU"
        //     alt="salmon" /> 
        //     <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpRipOWrF-rTJj1cfiM02s6MAc6G9inkKRwA&usqp=CAU"
        //     alt="cookies" /> 
        //     <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReu9xvZVqxmv9zjGm8KnJ2Ji1rBOJXZYkXzg&usqp=CAU"
        //     alt="tacos" /> 
        
        // </div>
        // </div>
       
        )


    }


    export default HomePage;

