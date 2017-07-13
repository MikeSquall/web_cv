import React from 'react';

export default class Navbar extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-default" id="myNavbar" data-spy="affix" data-offset-top="760">
          {/* bouton menu mobile */}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="nav-menu-text">MENU</span>
            </button>
          </div>
          {/* contenu du bouton quand affichage mobile */}
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#profile">À propos de moi</a></li>
              <li><a href="#experiences">Expériences</a></li>
              <li><a href="#abilities">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      );
    }
}
