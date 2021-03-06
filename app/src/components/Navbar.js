import React from 'react';
import Scrollspy from 'react-scrollspy'

export default class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-default" id="myNavbar" data-spy="affix" data-offset-top="760">
          {/* bouton menu mobile */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="nav-menu-text">MENU</span>
            </button>
          </div>
          {/* contenu du bouton quand affichage mobile */}
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <Scrollspy 
              items={ ['profile', 'experiences', 'abilities', 'projects', 'contact'] } 
              currentClassName="active"
              className="nav navbar-nav"
            >
              <li><a href="#profile">À propos de moi</a></li>
              <li><a href="#experiences">Expériences</a></li>
              <li><a href="#abilities">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </Scrollspy>
          </div>
        </nav>
      );
    }
}
