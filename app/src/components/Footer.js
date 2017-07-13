import React from 'react';
import Contact from './section/Footer/Contact';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="contact" className="bg-dark">
        <h2>Contact</h2>
        <h5>Ça vous a plu ? Vous en voulez encore ? Alors n'hésitez pas je suis joignable !</h5>
        <div className="row">
          <hr/>
          <Contact contactLink="mailto:arbib.michael@gmail.com" contactType="mail" contactValue="arbib.michael@gmail.com" />
          <Contact contactLink="tel:0629351901" contactType="phone" contactValue="06 29 35 19 01" />
          <Contact contactLink="https://www.linkedin.com/in/michael-arbib-92030520" contactType="linkedin" contactValue="linkedin.com/michael-arbib" />
          <Contact contactLink="https://github.com/MikeSquall" contactType="github" contactValue="github.com/MikeSquall" />
        </div>
      </div>
    );
  }
}