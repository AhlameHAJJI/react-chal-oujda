import React from "react";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3"> Sign Up</h5>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default SignUp;
