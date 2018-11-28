import React from 'react';
import './App.css';
import Artyom from 'artyom.js';
import { Route, Redirect, withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form'

import ArtyomCommandsManager from './ArtyomCommands.js';

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

class App extends React.Component {
    constructor (props, context){
        super(props, context);

        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        this.goToPath = this.goToPath.bind(this)
        this.changeLng = this.changeLng.bind(this)

        this.state = {
            lng: 'fr-FR',
            formState: '',
            artyomActive: false,
            artyomIsReading: false
        };

        // Load some commands to Artyom using the commands manager
        let CommandsManager = new ArtyomCommandsManager(Jarvis);
        CommandsManager.loadCommands(this);

    }

    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started !");

        Jarvis.initialize({
            lang: this.state.lng,
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        }).then(() => {
            // Display loaded commands in the console
            console.log(Jarvis.getAvailableCommands());
            this.state.lng === 'fr-FR' ?
                Jarvis.say("Bonjour et bienvenue à l'agence de Pole emploi de la défense. Qu'avez vous besoin de faire aujourd'hui ?", {
                    onStart() {
                        Jarvis.dontObey();
                    },
                    onEnd() {
                        Jarvis.obey()
                    }
                }) :
                Jarvis.say("Hello and welcome the agency. what would you like to do today ", {
                    onStart() {
                        Jarvis.dontObey();
                    },
                    onEnd() {
                        Jarvis.obey()
                    }
                })

            _this.setState({
                artyomActive: true
            });
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
        });
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log("Jarvis has been succesfully stopped");

            _this.setState({
                artyomActive: false
            });

        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen neither!", err);

            _this.setState({
                artyomActive: false
            });
        });
        return ''
    }

    goToPath(path) {
        this.props.history.push(path);
    }

    changeLng(event) {
        this.setState({
            lng: event.target.value
        })
    }

    render() {
        return (
            <switch>
                <Route
                    exact
                    path={`/`}
                    render={() => <Redirect to="/homepage" />}
                />
                <Route
                    path={'/homepage'}
                    render={() => <HomePage startAssistant={this.startAssistant} changeLng={this.changeLng} />}
                />
                <Route
                    path={'/form'}
                    render={() => <Form formState={this.state.formState} goToPath={this.goToPath} startFormAssistant={this.startFormAssistant}/>}
                />
            </switch>
        );
    }
}

export default withRouter(App)