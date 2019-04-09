import React from "react";

class Contact extends React.Component {
  state = {
    Email: "",
    Message: "",
    FirstName: "",
    LastName: "",
    Tel: ""
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
        <h5 className="grey-text text-darken-3"> Contact Us</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter firstName"
              onChange={this.handleChange}
              value={this.state.FirstName}
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
            <div className="form-group">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.Email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <label htmlFor="tel">Tel</label>
            <input
              type="text"
              className="form-control"
              id="tel"
              placeholder="Enter Tel"
              onChange={this.handleChange}
              value={this.state.tel}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control rounded-0"
              id="message"
              placeholder="Message"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Contact;
