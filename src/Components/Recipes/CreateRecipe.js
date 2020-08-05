import React, {Component} from 'react';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            recipeName: "",
            ingredients: "",
            cookTime: "",
            rating: "",
            image: "",
            instructions: ""
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
    })
}
    render() {
        return (
            <div className = "Recipe-Card">
            <h2 className= "recipes" >Create Recipe</h2>
            
            
       
        <form classname = "form" onSubmit={(e) => this.props.handleSubmit(e,this.state)}>
            <p>Select Category from Dropdown</p>
            <select className = "Dropdown" name = "category" onChange={this.handleChange}>
            <option value = "dessert">Desserts</option>
            <option value = "sidedish">Sides</option>
            <option value = "Appetizers">App</option>
            <option value = "meat">Meats</option>

        </select>
            <input type = "text" name="recipeName" placeholder = "Recipe Name" onChange={this.handleChange}/>
            <input type = "text" name="ingredients" placeholder="Enter Ingredients" onChange={this.handleChange}/>
            <input type = "text" name="cookTime" placeholder="Cooktime"  onChange={this.handleChange}/>
            <input type = "text" name="rating" placeholder="Rating"  onChange={this.handleChange}/>
            <input type = "text" name="image" placeholder="Image" onChange={this.handleChange}/>
            <input type = "text" name="instructions" placeholder="Instructions" onChange={this.handleChange}/>
            <input id = "submit" type = "submit" value = "SubmitPost"/>
        </form>
        </div>
        )
    }
}

export default CreateRecipe;