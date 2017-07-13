import React from 'react';
import ProgressBar from './ProgressBar'


export default class Skill extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-6 tech-nom"><p>{this.props.skillName}</p></div>
        <ProgressBar skillValue={this.props.skillValue} />
      </div>
    );
  }
}