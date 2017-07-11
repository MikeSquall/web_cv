import React, { Component } from 'react';

export default class About extends React.Component {
    render() {
      return (
        <div id="profile" className="bg-dark">
          <h2>En résumé</h2>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h3 className="align-gauche">Qui suis-je ?</h3>
              <hr/>
              <p className="align-gauche">Je fais partie de cette catégorie de personnes qui aime apprendre. J'ai commencé à toucher à la programmation par curiosité pendant mes études d'assurance, dans le cadre d'un projet tutoré, puis j'ai continué par  plaisir. 
              </p>
              <p className="align-gauche">J'ai ensuite choisi de poursuivre dans cette voie en m'inscrivant au Master 2 PISE de la fac de Paris 7 Diderot, qui forme à la gestion de projets informatiques et à la programmation de manière intensive des élèves venant de cursus divers.
              </p>
              <p className="align-gauche">Pour l'anecdote, j'ai commencé ma carrière professionnelle en tant que pâtissier mais j'ai été contraint d'y renoncer.
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="img/profil.jpg" className="img-circle" width="200" id="portrait" alt="Michael ARBIB"/>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3 className="align-gauche">Informations</h3>
              <hr/>
              <p className="align-gauche"><b>Nom</b> : ARBIB</p>
              <p className="align-gauche"><b>Prénom</b> : Michael</p>
              <p className="align-gauche"><b>Âge</b> : <span id="ageCalc"></span> ans</p>
              <p className="align-gauche"><b>Habite</b> : Saint-Brice-sous-Forêt (95)</p>
              <br/>
              <h3 className="align-gauche">Ce que je fais de mon temps libre :</h3>
              <hr/>
              <ul>
                <li>de la programmation Arduino</li>
                <li>de la pâtisserie</li>
                <li>du drone de loisir</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
}