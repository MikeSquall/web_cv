import React from 'react';

export default class Portfolio extends React.Component {
    render() {
      return (
        <div id="projects" className="bg-white">
            <h2>Projets</h2>
            
            {/*  réalisés  */}
            <div className="row">
                <h3>Projets réalisés</h3>
                <hr/>
                {/*  Web CV  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="http://michaelarbib.com" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/michaelarbib_com.png" alt="Web CV"/>
                            <figcaption>
                                <p className="vignette-title">Michael ARBIB</p>
                                <hr/>
                                <p className="vignette-text">Le site que vous visitez</p>
                                <p className="vignette-text">#web_cv, #frontend, #myself</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                {/*  Coopengo  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/coopengo/coog-admin" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/coog.png" alt="Coog-admin"/>
                            <figcaption>
                                <p className="vignette-title">Coog Admin</p>
                                <hr/>
                                <p className="vignette-text">Coog Toolkit</p>
                                <p className="vignette-text">#bash, #coog, #coopengo</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>

            <div className="row">
                <h3>Projets d'études</h3>
                <hr/>
                {/*  Projet C  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/MikeSquall/projet_c" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/projet-c.png" alt="projet-c"/>
                            <figcaption>
                                <p className="vignette-title">De Bastille à République</p>
                                <hr/>
                                <p className="vignette-text">Programme de calcul de plus court chemin.</p>
                                <p className="vignette-text">#gps, #langage_c, #terminal</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                {/*  Ludirent  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="http://www.ludirent.fr" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/ludirent.png" alt="Ludirent"/>
                            <figcaption>
                                <p className="vignette-title">Ludirent</p>
                                <hr/>
                                <p className="vignette-text">Site de location de jouets.</p>
                                <p className="vignette-text">#web, #php, #echange</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                
                {/*  Kamisado  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/MikeSquall/kamisado" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/kamisado.png" alt="Kamisado"/>
                            <figcaption>
                                <p className="vignette-title">Kamisado</p>
                                <hr/>
                                <p className="vignette-text">Adaptation du jeu de Kamisado en C#</p>
                                <p className="vignette-text">#C#, #projet_cours, #Kamisado</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                {/*  Blokus  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/MikeSquall/java_blokus" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/blokus.png" alt="Blokus"/>
                            <figcaption>
                                <p className="vignette-title">Blokus</p>
                                <hr/>
                                <p className="vignette-text">Adaptation du jeu de Blokus en Java (Swing)</p>
                                <p className="vignette-text">#Java, #projet_cours, #Blokus</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
            
            {/*  en cours  */}
            <div className="row">
                <h3>Projets en cours</h3>
                <hr/>
                {/*  ???  */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <figure className="vignette">
                            <img src="img/en-cours.png" alt="WIP"/>
                            <figcaption>
                                <p className="vignette-title">???</p>
                                <hr/>
                                <p className="vignette-text"></p>
                                <p className="vignette-text">#ReactJS, #Node, #Django</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
      );
    }
}