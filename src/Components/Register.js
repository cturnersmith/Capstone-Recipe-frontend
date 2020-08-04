import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      profilePic: ""
    }
  }

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className = "register-form" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
         <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.handleChange}
        />
         <input
          type="text"
          name="img"
          placeholder="Profile Image"
          value={this.state.profilePic}
          onChange={this.handleChange}
        />
        <input type="submit" value="Register" />
        {/* <Link to='/register'>Register</Link> */}
      </form>
    )
  }
}

export default RegisterForm;