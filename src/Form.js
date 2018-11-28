import React from 'react';
import './Form.css';

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formState: props.formState
        }
        this.flipFormState = this.flipFormState.bind(this)
    }
    componentDidMount() {
        // let self = this
        // setInterval(function(){
        //     self.props.startFormAssistant()
        // },1500);
    }

    flipFormState(className) {
        this.setState({
            formState: className
        })
    }
    render() {
        return (
            <div className="Form-container">
                <button onClick={() => this.props.goToPath('/')}/>
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="flip">
                            <div className={`Form-card ${this.state.formState}`} >
                                <div className="face front">
                                    <div className="panel panel-default">
                                        <form className="form-horizontal">
                                            <h1 className="text-center"><img className="Form-img" src="logo.png"/></h1>
                                            <input className="form-control" placeholder="Identifiant"/>
                                            <input className="form-control" placeholder="Mot de passe"/>
                                            <p className="text-right"><a href="">Où trouver mes identifiants ?</a></p>
                                            <button className="btn btn-danger btn-block">Se connecter</button>
                                            <hr/>
                                            <p>
                                                <a href="#" className="fliper-btn" onClick={() =>this.flipFormState('flipped')}>Créer un compte</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div className="face back">
                                    <div className="panel panel-default">
                                        <form className="form-horizontal">
                                            <h1 className="text-center"><img className="Form-img" src="logo.png"/></h1>
                                            <fieldset>
                                                <legend>Etat civil</legend>
                                                <input type="checkbox" value="mme"/><span> Madame </span>
                                                <input type="checkbox" value="mr" checked/><span> Monsieur </span>
                                                <br/>
                                                <input className="form-control" placeholder="Prénom"/>
                                                <input className="form-control" placeholder="Nom"/>
                                                <input type="date" className="form-control" placeholder="Date de naissance"/>
                                            </fieldset>
                                            <br/>
                                            <fieldset>
                                                <legend>Adresse</legend>
                                                <select className="form-control">
                                                    <option>France</option>
                                                </select>
                                                <input className="form-control" placeholder="Code postal"/>
                                                <input className="form-control" placeholder="Commune"/>
                                                <input className="form-control" placeholder="N°, type, libellé de la voie"/>
                                                <input className="form-control" placeholder="Complément d'adresse"/>
                                            </fieldset>
                                            <br/>
                                            <button className="btn Form-btn btn-danger btn-block">S'incrire</button>
                                            <p>
                                                <a href="#" className="fliper-btn" onClick={() => this.flipFormState('')}>J'ai déja un compte</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"/>
                </div>
            </div>
        );
    }
}