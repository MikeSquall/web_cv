import React from 'react';
import Experience from './Experiences/Experience'

export default class Experiences extends React.Component {
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
          {/*  Back end Dev */}
          <Experience
            xpWebsite="http://www.coopengo.com/" 
            xpName="Coopengo" 
            xpImage="img/coopengo.png" 
            xpImageAlt="Coopengo" 
            xpDateRange="Nov. 2016 - Maintenant" 
            xpCityMap="https://goo.gl/BaXMBZ" 
            xpCity="Paris (10e)" 
            xpTitle="Développeur Backend" 
            xpDetails1="Ma première expérience en tant que développeur." 
            xpDetails2={["Je participe au développement d'un ERP spécialisé " +
              "(dans la gestion de contrats d'assurance) basé sur l'ERP open" +
              "source", 
              <a href='https://www.tryton.org'><strong>Tryton</strong></a>]} 
            xpDetails3="Je suis également en charge du pilotage de la partie 
              Support client. J'ai mis en place des outils de suivi de 
              l'activité du support et des process de déclaration d'incidents 
              par les clients" 
          />
          {/*  CP MOA  */}
          <Experience
            xpWebsite="http://www.epargnegmf.fr/" 
            xpName="GMF Vie" 
            xpImage="img/logo-GMF1.jpg" 
            xpImageAlt="GMF" 
            xpDateRange="Sept. 2014 - Oct. 2016" 
            xpCityMap="https://goo.gl/sEBUhe" 
            xpCity="Ermont (95)" 
            xpTitle="Chef de Projet MOA" 
            xpDetails1="Mes débuts dans le monde du SI en entreprise." 
            xpDetails2="Cette expérience m'a permis de conduire des projets 
              touchant au SI gestion de l'entreprise. Je travaille sur plusieurs 
              projets très différents en même temps, ce qui est très stimulant."
            xpDetails3="J'ai pu y découvrir plus profondément le monde de la 
              programmation, les contraintes des mises en production, les aléas,
               la résolution d'urgences, ... " 
          />
          {/*  back off ass-coll  */}
          <Experience
            xpWebsite="http://www.epargnegmf.fr/" 
            xpName="GMF Vie" 
            xpImage="img/logo-GMF1.jpg" 
            xpImageAlt="GMF" 
            xpDateRange="Sept. 2013 - Août 2014" 
            xpCityMap="https://goo.gl/sEBUhe" 
            xpCity="Ermont (95)" 
            xpTitle="Gestionnaire Back office, service Assurances Collectives" 
            xpDetails1="La suite de mon cursus assurantiel." 
            xpDetails2="J'ai fait de la gestion de contrats collectifs de 
              prévoyance (prévoyance complémentaire employeur, garantie 
              emprunteur) et d'épargne (contrats art.83, art. 39, IFC)."
            xpDetails3="Cette expérience m'a permis de pousser plus loin mes 
              connaissances en assurances de personnes." 
          />
          {/*  agence  */}
          <Experience
            xpWebsite="https://agence.axa.fr/ile-de-france/paris/paris-9/burlotto-cedric" 
            xpName="Agence AXA - Burlotto" 
            xpImage="img/axa.jpg" 
            xpImageAlt="AXA" 
            xpDateRange="Sept. 2011 - Août 2013"
            xpCityMap="https://goo.gl/cFpM1b" 
            xpCity="Paris (9e)" 
            xpTitle="Collaborateur d'Agent Général" 
            xpDetails1="Mes premiers pas de le vaste monde de l'assurance. 
              Pendant 2 ans, j'ai assisté l’Agent Général dans son activité 
              commerciale." 
            xpDetails2="Cette expérience m'a permis d'explorer la diversité
              du monde de l'assurance et d'améliorer mon relationnel en 
              étant confronté quotidiennement à des clients."
            xpDetails3="" 
          />
          {/*  pâtisserie  */}
          <Experience
            xpWebsite="https://agence.axa.fr/ile-de-france/paris/paris-9/burlotto-cedric" 
            xpName="Divers employeurs" 
            xpImage="img/pastry.png" 
            xpImageAlt="pâtisserie" 
            xpDateRange="2007 - 2011"
            xpCityMap="https://goo.gl/nyJJCs" 
            xpCity="Paris (75)" 
            xpTitle="Pâtissier" 
            xpDetails1={[
              "Mission longue en intérim en tant que commis ou chef de partie chez : ", <br/>, 
              <a href="http://www.lamaisonduchocolat.fr/fr/" target="_blank" rel="noopener noreferrer">La Maison du Chocolat</a>, ", ",
              <a href="http://www.poteletchabot.com/fr/accueil.html" target="_blank" rel="noopener noreferrer">Potel et Chabot</a>, ", ",
              <a href="www.fauchon.com/" target="_blank" rel="noopener noreferrer">Fauchon</a>]}
            xpDetails2=""
            xpDetails3=""
          />
          {/*  ***** FORMATIONS *****  */}
          <div className="col-md-12">
            <hr/>
            <h3 className="align-gauche">Formations</h3>
          </div>
          {/*  M2 PISE  */}
          <Experience
            xpWebsite="https://www.univ-paris-diderot.fr/" 
            xpName="Université Paris 7 Diderot" 
            xpImage="img/logo%20paris%20diderot.jpg" 
            xpImageAlt="Paris 7 Diderot" 
            xpDateRange="Oct. 2015 - Oct. 2016"
            xpCityMap="https://goo.gl/yczPQr" 
            xpCity="Paris (13e)" 
            xpTitle={[
              <a href="http://pise.info/" target="_blank" rel="noopener noreferrer">
                Master 2 PISE - Projet Informatique et Stratégie d'Entreprise
              </a>]}
            xpDetails1="Le master que j'ai choisi pour acquérir des compétences 
              techniques, en partant de (presque) zéro, pour compléter mon 
              expérience fonctionnelle."
            xpDetails2="Cette année a été riche en enseignements techniques et 
              m'a décidé à pousser plus loin vers le développement."
            xpDetails3=""
          />
          {/*  M1 ESA  */}
          <Experience
            xpWebsite="http://formation-bts-assurances.esaassurance.com/" 
            xpName="Ecole Supérieure d’Assurances" 
            xpImage="img/esa-assurances.jpg" 
            xpImageAlt="ESA" 
            xpDateRange="Oct. 2014 - Juin 2015"
            xpCityMap="https://goo.gl/SvGCeQ" 
            xpCity="Paris (20e)" 
            xpTitle={[
              <a href="http://formation-bts-assurances.esaassurance.com/formation_assurance/european_master_assurance_en_alternance.htm" target="_blank" rel="noopener noreferrer">
                Master 1 - Manager de l'assurance
              </a>]}
            xpDetails1="J'ai effectué cette première année de master pour 
              pouvoir mettre un pied dans l'univers de la gestion de projets 
              et pour pouvoir accéder au M2 PISE."
            xpDetails2=""
            xpDetails3=""
          />
          {/*  Licence ENASS  */}
          <Experience
            xpWebsite="http://www.enass.fr/" 
            xpName="Ecole Nationale d’Assurances" 
            xpImage="img/enass.jpg" 
            xpImageAlt="ENASS" 
            xpDateRange="Oct. 2013 - Juin 2014"
            xpCityMap="https://goo.gl/p5dt8L" 
            xpCity="La Défense" 
            xpTitle={[
              <a href="http://www.enass.fr/licence-professionnelle-assurances/licence-en-assurances-en-alternance-ou-formation-initiale-fr-1-p18.html" target="_blank" rel="noopener noreferrer">
                Licence professionnelle Conseiller, Souscripteur, Gestionnaire en assurance
              </a>]}
            xpDetails1="J'ai fait cette licence pour me spécialiser en assurance 
              vie (individuelle et collective) suite à mon BTS. Cette année m'a 
              fait découvrir la gestion de projet : pour un projet tutoré, j'ai 
              commencé à me former au développement avec OpenClassroom."
            xpDetails2=""
            xpDetails3=""
          />
          {/*  BTS IFPASS  */}
          <Experience
            xpWebsite="http://www.ifpass.fr/" 
            xpName="Institut de Formation de la Profession de l'Assurance" 
            xpImage="img/Ifpass.jpg" 
            xpImageAlt="IFPASS" 
            xpDateRange="Sept. 2011 - Juin 2013"
            xpCityMap="https://goo.gl/p5dt8L" 
            xpCity="La Défense" 
            xpTitle={[
              <a href="http://www.ifpass.fr/formation-diplomante/bts-assurance-5-38-34.html" target="_blank" rel="noopener noreferrer">
                BTS Assurance
              </a>]}
            xpDetails1="Suite à une reconversion professionnelle, j'ai choisit 
              d'entrer dans le secteur de l'assurance pour la diversité des 
              métiers proposés. Ce BTS a été le point de départ de mon nouveau 
              parcours."
            xpDetails2=""
            xpDetails3=""
          />
          {/*  Pâtisserie CFA  */}
          <Experience
            xpWebsite="http://www.ima95.fr/ima-villiers-le-bel" 
            xpName="Institut des Métiers de l'Artisanat" 
            xpImage="img/ima.gif" 
            xpImageAlt="IMA 95" 
            xpDateRange="Sept. 2007 - Juin 2009"
            xpCityMap="https://goo.gl/pZHftu" 
            xpCity="Villiers-le-Bel (95)" 
            xpTitle={[
              <a href="http://www.ima95.fr/metier/patissier" target="_blank" rel="noopener noreferrer">
                CAP / Mention Complémentaire Pâtisserie
              </a>]}
            xpDetails1="J'ai suivi ces formations car je souhaitais devenir 
              chef pâtissier dans une grande maison. Le destin en décidera 
              autrement."
            xpDetails2=""
            xpDetails3=""
          />
          {/*  Bac  */}
          <Experience
            xpWebsite="http://villiers.ort.asso.fr/" 
            xpName="ORT" 
            xpImage="img/ort.png" 
            xpImageAlt="ORT" 
            xpDateRange="2006"
            xpCityMap="https://goo.gl/y35hDH" 
            xpCity="Villiers-le-Bel (95)" 
            xpTitle="Baccalauréat S"
            xpDetails1=""
            xpDetails2=""
            xpDetails3=""
          />
          {/*  fin expériences  */}
        </div>
      </div>
    );
  }
}