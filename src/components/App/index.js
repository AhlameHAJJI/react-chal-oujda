import React, { Component } from "react";

import Header from "common/Header";

import navList from "mocks/navList";

import titlesLinkFooter from "mocks/titlesLinkFooter";

import "./App.css";

import Home from "pages/Home";

import Contact from "pages/Contact";

import About from 'pages/About';

import Footer from "../../common/Footer";

import {BrowserRouter as Router , Route, Switch} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Header appTitle="Sqli App" navLinks={navList} />
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/about" component={About}/>
        </Switch>
        <Footer footerTitles={titlesLinkFooter}/> 
        </div>
       
        </Router>
        
    );
  }
}

export default App;
