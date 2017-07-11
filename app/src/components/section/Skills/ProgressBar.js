import React, { Component } from 'react';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <div className="col-md-6 tech-stat">
        <div className="progress">
          <div 
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{width: this.props.skillValue + "%"}}>
          </div>
        </div>
      </div>
    );
  }
}