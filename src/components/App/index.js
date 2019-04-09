import React, { Component } from "react";

import Header from "common/Header";

import navList from "mocks/navList";

import titlesLinkFooter from "mocks/titlesLinkFooter";

import "./App.css";

import Footer from "../../common/Footer";

import Router from "Router";

class App extends Component {
  render() {
    return (
      <div>
        <Header appTitle="Sqli App" navLinks={navList} />
        <Router />
        <Footer footerTitles={titlesLinkFooter} />
      </div>
    );
  }
}

export default App;
