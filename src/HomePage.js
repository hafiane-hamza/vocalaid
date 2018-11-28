import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <button onClick={this.props.startAssistant}>Démarrer l'assistant</button>
                <select onChange={this.props.changeLng}>
                    <option value="fr-FR" selected>FR</option>
                    <option value="en-EN" >EN</option>
                </select>
                <div className="logo">
                    <div className="row">
                        <div className="col-md-2 offset-md-5">
                            <img src="https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_P%C3%B4le_Emploi.png" />
                        </div>
                    </div>

                    <h3>Bienvenue à l'agence de la Défense</h3>

                    <div className="row">
                        <div className="col-sm-3 offset-md-2">
                            <div className="circle">
                                <a href="#section_4"><Link to={`/form`}><h5>M'actualiser </h5></Link></a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="circle">
                                <a href="#section_4"><h5>Gérer mon dossier</h5></a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="circle">
                                <a href="#section_4"><h5>M'inscrire, me réinscrire</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group col-md-7 offset-md-3 mt-4">
                            <input type="text" className="form-control input-sm" placeholder="Métier" />
                            <span className="input-group-btn span-bet" ></span>
                            <input type="text" className="form-control input-sm" placeholder="Lieu" />
                        </div>

                    </div>
                </div>

                <section className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="header">
                                                <h4 className="card-title">Ma formation</h4>
                                            </div>
                                            <div className="description">
                                                <p className="card-text">Toutes les réponses aux questions que vous vous posez avant un départ pour travailler à l'étranger</p>
                                                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="header">
                                                <h4 className="card-title">Partir à l'étranger</h4>
                                            </div>
                                            <div className="description">
                                                <p className="card-text">Vous êtes à la recherche d’une formation ? Découvrez la nouvelle application Ma Formation de Pôle emploi !</p>
                                                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="header">
                                                <h4 className="card-title">Mon entretien d'embauche</h4>
                                            </div>
                                            <div className="description">
                                                <p className="card-text">Préparez vos futurs entretiens d’embauche en Réalité Virtuelle pour une immersion encore plus intense et une expérience inédite !</p>
                                                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}