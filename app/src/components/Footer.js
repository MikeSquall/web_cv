import React, { Component } from 'react';

export default class Footer extends React.Component {
    render() {
        return (
          <div id="contact" className="bg-dark">
            <h2>Contact</h2>
            <h5>Ça vous a plu ? Vous en voulez encore ? Alors n'hésitez pas je suis joignable !</h5>
            <div className="row">
                <hr/>
                <div className="col-md-6">
                    <ul className="social-container">
                        <li>
                            <a href="mailto:arbib.michael@gmail.com" className="social-link">
                                    <div className="icon icon-mail social-li"></div>arbib.michael.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:0629351901"  className="social-link">
                                <div className="icon icon-phone social-li"></div>06 29 35 19 01
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="social-container">
                        <li>
                            <a href="https://www.linkedin.com/in/michael-arbib-92030520?trk=nav_responsive_tab_profile" target="_blank"  className="social-link">
                                <div className="icon icon-linkedin social-li"></div>linkedin.com/michael-arbib
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MikeSquall" target="_blank"  className="social-link">
                                <div className="icon icon-github social-li"></div>github.com/MikeSquall
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        );
    }
}