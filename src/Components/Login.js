import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import CreateRecipe from './Recipes/CreateRecipe';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className = "login-form" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <h2>Login Here</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />

        {/* <Route path = "/login" render= {() => {
            return <CreateRecipe handleSubmit = {this.CreateRecipe} />
        }} /> */}
        {/* <Link to='/login'>Login</Link>
        <Link to='/home'>
            <button type = "button">
                    LogOut!
            </button>
        </Link> */}
      </form>
    )
  }
}

export default LoginForm;
