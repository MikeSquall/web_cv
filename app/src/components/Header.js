import React, { Component } from 'react';

export default class Header extends React.Component {
    render() {
        return (
          <div className="jumbotron">
            <div className="container">
                <h1 className="page-header">Michael Arbib</h1>
                <p className="sous-titre">Développeur</p>
            </div>
            <a href="#profile" id="chevron"><span className="glyphicon glyphicon-chevron-down"></span></a>
          </div>
        );
    }
}