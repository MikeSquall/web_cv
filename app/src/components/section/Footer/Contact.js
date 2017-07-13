import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <ul className="social-container">
          <li>
            <a href={this.props.contactLink} className="social-link" target="_blank">
              <div className={`social-li icon icon-${this.props.contactType}`}></div>{this.props.contactValue}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}