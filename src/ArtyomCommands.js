export default class ArtyomCommandsManager {

    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }

    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(self){
        let Jarvis = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Jarvis.addCommands([
            {
                indexes: ["salut"],
                action: () => {
                    Jarvis.say("salut, comment ça va ?", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: [" * sur la page d'accueil"],
                smart: true,
                action: () => {
                    Jarvis.say("Vous allez être rediriger vers la page d'accueil", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["page d'accueil"],
                action: () => {
                    Jarvis.say("Vous allez être rediriger vers la page d'accueil", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["quel temps fait-il"],
                action: () => {
                    Jarvis.say("il fait très beau aujourd'hui");
                }
            },
            {
                indexes: ["comment tu t'appelles"],
                action: () => {
                    alert('je m\'appelle l\'assistant vocal')
                },
            },
            {
                indexes: ["je m'appelle *"],
                smart: true,
                action: (i, name) => {
                    Jarvis.say(`bonjour ${name}`);
                }
            },
            {
                indexes: [" * me connecter"],
                smart: true,
                action: () => {
                    self.setState({
                        formState: ''
                    })
                    Jarvis.say("vous serez redirigé vers le formulaire de connexion", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["se connecter", "connexion"],
                action: () => {
                    self.setState({
                        formState: ''
                    })
                    Jarvis.say("vous serez redirigé vers le formulaire de connexion", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["s'inscrire","m'inscrire", "je * m'inscrire", "inscription", "je m'inscris"],
                smart: true,
                action: () => {
                    self.setState({
                        formState: 'flipped'
                    })

                    Jarvis.say("vous serez redirigé vers le formulaire d'inscription", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["log in", "sign in"],
                action: () => {
                    Jarvis.say("you will be redirected to the log in form", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: [" * login"],
                smart: true,
                action: () => {
                    Jarvis.say("you will be redirected to the log in form", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: [" * enrol", "i * to register"],
                smart: true,
                action: () => {
                    self.setState({
                        formState: 'flipped'
                    })

                    Jarvis.say("you will be redirected to the register form", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["register"],
                action: () => {
                    self.setState({
                        formState: 'flipped'
                    })

                    Jarvis.say("you will be redirected to the register form", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/form')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["my name is * "],
                smart: true,
                action: (i, name) => {
                    Jarvis.say(`Hi ${name}`);
                }
            },
            {
                indexes: ["homepage"],
                action: () => {
                    Jarvis.say("you will be redirected to the home page", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/')
                            Jarvis.obey()
                        }
                    });
                }
            },
            {
                indexes: ["* to homepage"],
                smart: true,
                action: () => {
                    Jarvis.say("you will be redirected to the homepage", {
                        onStart() {
                            Jarvis.dontObey();
                        },
                        onEnd() {
                            self.goToPath('/')
                            Jarvis.obey()
                        }
                    });
                }
            },
        ])
    }
}