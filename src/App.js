import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import GendernDetails from './components/pages/gendernDetails'

// includes
import './Assets/css/default.min.css';
import gendernDetails from './components/pages/gendernDetails';

class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">

       <Header />
       <Route exact path='/homePage' component={Homepage} />
        <Route exact path='/gendernDetails' component={GendernDetails} />

       <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
