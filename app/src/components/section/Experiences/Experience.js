import React from 'react';


export default class Experience extends React.Component {
  render() {
    return (
      <div className="xp-ligne col-md-12">
        <div className="col-md-4">
          <a href={this.props.xpWebsite} target="_blank"><h4>{this.props.xpName}</h4></a>
          <img src={this.props.xpImage} className="xp-image" alt={this.props.xpImageAlt}/>
          <p>{this.props.xpDateRange}</p>
          <a href={this.props.xpCityMap} target="_blank"><span className="glyphicon glyphicon-globe"></span>{this.props.xpCity}</a>
        </div>
        <div className="col-md-8">
          <h4 className="poste">{this.props.xpTitle}</h4>
          {/* TODO --> find a better way to manage details */}
          <p className="xp-details">{this.props.xpDetails1}</p>
          <p className="xp-details">{this.props.xpDetails2}</p>
          <p className="xp-details">{this.props.xpDetails3}</p>
        </div>
        <div className="col-md-12 separator"></div>
      </div>
    );
  }
}
