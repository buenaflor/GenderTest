import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
       <header>
        <div className="logo">
            LOGO
        </div>

        <nav>
            <ul>
                <li className="first">
                <Link to="/Homepage">Startseite</Link>
                </li>
                <li>
                <Link to="/GendernDetails">Wozu Gendern?</Link>
                </li>
                <li className="/Tips">
                <Link to="/">Tipps und Tricks</Link>
                </li>    
                <li className="last">
                <Link to="/">Über uns</Link>
                </li>             
            </ul>
        </nav>
       </header>
    );
  }
}

export default Header;
