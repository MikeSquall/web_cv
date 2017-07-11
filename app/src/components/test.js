import React, { Component } from 'react';

class Hello extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nbClick: 0,
      };
    }

  handleClick(i) {
    this.setState({
      nbClick: i+1
    });
  }

  render() {
    return (
      <div>
        <div>
          <strong>Hello!</strong> Welcome, 
          <span style={{"fontFamily": "Consolas", "textDecoration": "underline"}}>
            <span style={{color: "green"}}>{this.props.firstName}</span> 
            <span style={{color: "red"}}>{this.props.lastName}</span>
          </span>.
        </div>
        { this.props.showCorrect &&
          <div>
            <div onClick={() => this.handleClick(this.state.nbClick)}>
              Not your name? Click <a href="#">here</a> to correct ...
            </div>
            <div>
              {this.state.nbClick} clicks so far
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Hello;