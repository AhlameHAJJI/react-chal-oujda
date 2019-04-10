import React from "react";
import { connect } from "react-redux";
import { contactUsActions } from "store/actions/contactUsActions";

class Contact extends React.Component {
  state = {
    Email: "",
    FirstName: "",
    LastName: "",
    Tel: "",
    Message: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.contactUsActions(this.state);
    this.props.history.push("/");
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
              id="FirstName"
              placeholder="Enter firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="LastName"
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
            <label htmlFor="Tel">Tel</label>
            <input
              type="text"
              className="form-control"
              id="Tel"
              placeholder="Enter Tel"
              onChange={this.handleChange}
              value={this.state.Tel}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Message">Message</label>
            <textarea
              className="form-control rounded-0"
              id="Message"
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

const mapDispatchToProps = dispatch => {
  return {
    contactUsActions: contact => dispatch(contactUsActions(contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Contact);
