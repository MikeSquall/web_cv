import React from 'react';
import Skill from './Skills/Skill'

export default class Skills extends React.Component {
    render() {
      return (
        <div id="abilities" className="bg-dark">
          <h2>Compétences</h2>
          <div className="row">
            <div className="col-md-12">
              <hr/>
              <h3 className="align-gauche">Technique</h3>
              <div className="col-md-6">
                <h4>Développement</h4>
                <hr/>
                <Skill skillName="HTML" skillValue="90" />
                <Skill skillName="CSS" skillValue="85" />
                <Skill skillName="JS" skillValue="60" />
                <Skill skillName="SQL / Postgres" skillValue="70" />
                <Skill skillName="Python" skillValue="70" />
                <Skill skillName="Bash" skillValue="60" />
              </div>
              <div className="col-md-6">
                <h4>Outils</h4>
                <hr/>
                <Skill skillName="OS X" skillValue="90" />
                <Skill skillName="Linux" skillValue="80" />
                <Skill skillName="Photoshop" skillValue="80" />
                <Skill skillName="Git / Github" skillValue="80" />
                <Skill skillName="Docker" skillValue="60" />
              </div>
            </div>
            <div className="col-md-12">
              <hr/>
              <h3 className="align-gauche">Langues</h3>
              <h4>Parlées, lues, écrites</h4>
              <hr/>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Skill skillName="Français" skillValue="100" />
              </div>
              <div className="col-md-6">
                <Skill skillName="Anglais" skillValue="95" />
              </div>
            </div>
          </div>    
        </div>
      );
    }
}