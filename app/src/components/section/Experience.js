import React, { Component } from 'react';

export default class Experience extends React.Component {
  render() {  
    return (
      <div id="experiences" className="bg-white">
        <h2>Expériences</h2>
        <div className="row">
          {/*  ***** POSTES *****  */}
          <div className="col-md-12">
            <hr/>
            <h3 className="align-gauche">Postes occupés</h3>
          </div>
          {/*  Dev Coopengo  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.coopengo.com/" target="_blank"><h4>Coopengo</h4></a>
              <img src="img/coopengo.png" className="xp-image" alt="Coopengo"/>
              <p>Nov. 2016 - Maintenant</p>
              <a href="https://www.google.fr/maps/place/1+Rue+d'Hauteville,+75010+Paris/@48.8709487,2.3474526,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e169ec88645:0x37c3e16eb05892b!8m2!3d48.8709487!4d2.3496413" target="_blank"><span className="glyphicon glyphicon-globe"></span> Paris (75)</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Développeur Backend</h4>
              <p className="xp-details">Ma première expérience en tant que développeur.</p>
              <p className="xp-details">Je participe au développement d'un ERP spécialisé (dans la gestion de contrats d'assurance) basé sur l'ERP open source <a href="https://www.tryton.org"><strong>Tryton</strong></a></p>
              <p className="xp-details">Je suis également en charge du pilotage de la partie Support client. J'ai mis en place des outils de suivi de l'activité du support et des process de déclaration d'incidents par les clients</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  CP MOA  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.epargnegmf.fr/" target="_blank"><h4>GMF Vie</h4></a>
              <img src="img/logo-GMF1.jpg" className="xp-image" alt="GMF"/>
              <p>Sept. 2014 - Oct. 2016</p>
              <a href="https://www.google.fr/maps/place/Ermont/data=!4m2!3m1!1s0x47e667ba7576b8b5:0x40b82c3688b3320?sa=X&sqi=2&ved=0ahUKEwjQhKv_2PPMAhUCkiwKHf6sCzAQ8gEIfjAM" target="_blank"><span className="glyphicon glyphicon-globe"></span> Ermont (95)</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Chef de Projet MOA</h4>
              <p className="xp-details">Mes débuts dans le monde du SI en entreprise.</p>
              <p className="xp-details">Cette expérience m'a permis de conduire des projets touchant au SI gestion de l'entreprise. Je travaille sur plusieurs projets très différents en même temps, ce qui est très stimulant.</p>
              <p className="xp-details">J'ai pu y découvrir plus profondément le monde de la programmation, les contraintes des mises en production, les aléas, la résolution d'urgences, ... </p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  back off ass-coll  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.epargnegmf.fr/" target="_blank"><h4>GMF Vie</h4></a>
              <img src="img/logo-GMF1.jpg" className="xp-image" alt="GMF"/>
              <p>Sept. 2013 - Août 2014</p>
              <a href="https://www.google.fr/maps/place/Ermont/data=!4m2!3m1!1s0x47e667ba7576b8b5:0x40b82c3688b3320?sa=X&sqi=2&ved=0ahUKEwjQhKv_2PPMAhUCkiwKHf6sCzAQ8gEIfjAM" target="_blank"><span className="glyphicon glyphicon-globe"></span> Ermont (95)</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Gestionnaire Back office, service Assurances Collectives</h4>
              <p className="xp-details">La suite de mon cursus assurantiel.</p>
              <p className="xp-details">J'ai fait de la gestion de contrats collectifs de prévoyance (prévoyance complémentaire employeur, garantie emprunteur) et d'épargne (contrats art.83, art. 39, IFC).</p>
              <p className="xp-details">Cette expérience m'a permis de pousser plus loin mes connaissances en assurances de personnes.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  agence  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="https://agence.axa.fr/ile-de-france/paris/paris-9/burlotto-cedric" target="_blank"><h4>Agence AXA - Burlotto</h4></a>
              <img src="img/axa.jpg" className="xp-image" alt="AXA"/>
              <p>Sept. 2011 - Août 2013</p>
              <a href="https://www.google.fr/maps/place/43+Rue+la+Fayette,+75009+Paris/@48.8749403,2.3375249,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e38c8a4fb93:0x4251b207a58c185b!8m2!3d48.8749403!4d2.3397136" target="_blank"><span className="glyphicon glyphicon-globe"></span> Paris (9e)</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Collaborateur d'Agent Général</h4>
              <p className="xp-details">Mes premiers pas de le vaste monde de l'assurance. Pendant 2 ans, j'ai assisté l’Agent Général dans son activité commerciale.</p>
              <p className="xp-details"> Cette expérience m'a permis d'acquérir une plus grande confiance en moi en étant confronté quotidiennement.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  pâtisserie  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <h4>Divers employeurs</h4>
              <img src="img/pastry.png" className="xp-image" id="img-pastry" alt="patisserie"/>
              <p>2007 - 2011</p>
              <a href="https://www.google.fr/maps/place/Paris/@48.8587741,2.2074741,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219" target="_blank"><span className="glyphicon glyphicon-globe"></span> Paris</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Pâtissier</h4>
              <p className="xp-details">Mission longue en intérim en tant que commis ou chef de partie chez : <br/><a href="http://www.lamaisonduchocolat.fr/fr/" target="_blank">La Maison du Chocolat</a>, <a href="http://www.poteletchabot.com/fr/accueil.html" target="_blank">Potel et Chabot</a>, <a href="www.fauchon.com/" target="_blank">Fauchon</a></p>
            </div>
          </div>

          {/*  ***** FORMATIONS *****  */}
          <div className="col-md-12">
            <hr/>
            <h3 className="align-gauche">Formations</h3>
          </div>
          {/*  M2 PISE  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="www.univ-paris-diderot.fr/" target="_blank"><h4>Université Paris 7 Diderot</h4></a>
              <img src="img/logo%20paris%20diderot.jpg" className="xp-image" alt="Paris 7 Diderot"/>
              <p>Oct. 2015 - Aujourd'hui</p>
              <a href="https://www.google.fr/maps/place/Universit%C3%A9+Paris-VII/@48.8296303,2.3816863,15z/data=!4m2!3m1!1s0x0:0x5e080c63fecb92b0?sa=X&ved=0ahUKEwi7-s6M-_3MAhULDJoKHWjXBZkQ_BIIbzAO"  target="_blank"><span className="glyphicon glyphicon-globe"></span> Paris (13e)</a>
            </div>
            <div className="col-md-8">
              <a href="http://pise.info/" target="_blank"><h4 className="poste">Master 2 PISE - Projet Informatique et Stratégie d'Entreprise</h4></a>
              <p className="xp-details">Le master que j'ai choisi pour acquérir des compétences techniques, en partant de (presque) zéro, pour compléter mon expérience fonctionnelle.</p>
              <p className="xp-details">Cette année a été riche en enseignements techniques et m'a décidé à pousser plus loin vers la partie MOE de la gestion de projet.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  M1 ESA  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://formation-bts-assurances.esaassurance.com/"  target="_blank"><h4>Ecole Supérieure d’Assurances </h4></a>
              <img src="img/esa-assurances.jpg" className="xp-image" alt="ESA"/>
              <p>Oct. 2014 - Juin 2015</p>
              <a href="https://www.google.fr/maps/place/13+Rue+Fernand+L%C3%A9ger,+75020+Paris/@48.8639602,2.3873013,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66df2c85f77a7:0x55f4c9e23e626a38!8m2!3d48.8639602!4d2.38949"  target="_blank"><span className="glyphicon glyphicon-globe"></span> Paris (20e)</a>
            </div>
            <div className="col-md-8">
              <a href="http://formation-bts-assurances.esaassurance.com/formation_assurance/european_master_assurance_en_alternance.htm" target="_blank"><h4 className="poste">Master 1 - Manager de l'assurance</h4></a>
              <p className="xp-details">J'ai effectué cette première année de master pour pouvoir mettre un pied dans l'univers de la gestion de projets et pour pouvoir accéder au M2 PISE.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  Licence ENASS  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.enass.fr/"  target="_blank"><h4>Ecole Nationale d’Assurances </h4></a>
              <img src="img/enass.jpg" className="xp-image" alt="ENASS"/>
              <p>Oct. 2013 - Juin 2014</p>
              <a href="https://www.google.fr/maps/place/IFPASS+%2FENASS/@48.887181,2.238131,15z/data=!4m5!3m4!1s0x0:0x2c715551c7a3fdf1!8m2!3d48.887181!4d2.238131" target="_blank"><span className="glyphicon glyphicon-globe"></span> La Défense</a>
            </div>
            <div className="col-md-8">
              <a href="http://www.enass.fr/licence-professionnelle-assurances/licence-en-assurances-en-alternance-ou-formation-initiale-fr-1-p18.html" target="_blank"><h4 className="poste">Licence professionnelle Conseiller, Souscripteur, Gestionnaire en assurance</h4></a>
              <p className="xp-details">J'ai fait cette licence pour me spécialiser en assurance vie (individuelle et collective) suite à mon BTS. Cette année m'a fait découvrir la gestion de projet : pour un projet tutoré, j'ai commencé à me former au web design via OpenClassroom.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  BTS IFPASS  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.ifpass.fr/"  target="_blank"><h4>Institut de Formation de la Profession de l'Assurance</h4></a>
              <img src="img/Ifpass.jpg" className="xp-image" alt="IFPASS"/>
              <p>Sept. 2011 - Juin 2013</p>
              <a href="https://www.google.fr/maps/place/IFPASS+%2FENASS/@48.887181,2.238131,15z/data=!4m5!3m4!1s0x0:0x2c715551c7a3fdf1!8m2!3d48.887181!4d2.238131" target="_blank"><span className="glyphicon glyphicon-globe"></span> La Défense</a>
            </div>
            <div className="col-md-8">
              <a href="http://www.ifpass.fr/formation-diplomante/bts-assurance-5-38-34.html" target="_blank"><h4 className="poste">BTS Assurance</h4></a>
              <p className="xp-details">Suite à une reconversion professionnelle, j'ai choisit d'entrer dans le secteur de l'assurance pour la diversité des métiers proposés. Ce BTS a été le point de départ de mon nouveau parcours.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  Pâtisserie CFA  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://www.ima95.fr/ima-villiers-le-bel"  target="_blank"><h4>Institut des Métiers de l'Artisanat</h4></a>
              <img src="img/ima.gif" className="xp-image" alt="IFPASS"/>
              <p>Sept. 2007 - Juin 2009</p>
              <a href="https://www.google.fr/maps/uv?hl=fr&pb=!1s0x47e66a6c6d8b50bb:0x659e161715797017!2m5!2m2!1i80!2i80!3m1!2i100!3m1!7e115!4s/maps/place/ima%2Bvilliers%2Ble%2Bbel/@49.0019324,2.4051043,3a,75y,23.17h,90t/data%3D*213m4*211e1*213m2*211sFgFtneIcxoe7q53HDbzBMw*212e0*214m2*213m1*211s0x0:0x659e161715797017!5sima+villiers+le+bel+-+Recherche+Google&imagekey=!1e2!2sFgFtneIcxoe7q53HDbzBMw&sa=X&ved=0ahUKEwjo06zttv_MAhWEDCwKHUpaAfMQpx8IiAEwCg" target="_blank"><span className="glyphicon glyphicon-globe"></span> Villiers-le-Bel (95)</a>
            </div>
            <div className="col-md-8">
              <a href="http://www.ima95.fr/metier/patissier" target="_blank"><h4 className="poste">CAP / Mention Complémentaire Pâtisserie</h4></a>
              <p className="xp-details">J'ai suivi ces formations car je souhaitais devenir chef pâtissier dans une grande maison. Le destin en décidera autrement.</p>
            </div>
            <div className="col-md-12 separator"></div>
          </div>
          {/*  Bac  */}
          <div className="xp-ligne col-md-12">
            <div className="col-md-4">
              <a href="http://villiers.ort.asso.fr/"  target="_blank"><h4>ORT</h4></a>
              <img src="img/ort.png" className="xp-image" alt="ORT"/>
              <p>Juin 2006</p>
              <a href="https://www.google.fr/maps/place/32+Avenue+de+Choiseul,+95400+Villiers-le-Bel/@48.9938832,2.4084871,16.52z/data=!4m5!3m4!1s0x47e66a42f0168ef1:0x2eb6c0a0b5958e97!8m2!3d48.9941903!4d2.4102184" target="_blank"><span className="glyphicon glyphicon-globe"></span> Villiers-le-Bel (95)</a>
            </div>
            <div className="col-md-8">
              <h4 className="poste">Baccalauréat S</h4>
              <p className="xp-details">"Tu peux le faire, fais-le !" qu'ils disaient ... Rien de spécial à en dire, je l'ai passé pour pouvoir avancer.</p>
            </div>
          </div>
          {/*  fin expériences  */}
        </div>
      </div>
    );
  }
}