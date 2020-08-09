import {
    ENTER_CHAT,
} from '../actions';



export default (store) => (next) => (action) => {
    switch (action.type) {
        case ENTER_CHAT: {
            //Connexion au serveur central à l'entrée du chat:
            const socket = window.io ('http://localhost:3001/');
            //On se prépare à envoyer les infos de l'utilisateur connecté dès qu'on est sûr qu'il est connecté:
            socket.on ('greetings', (welcomeMessage) => {
                console.log(welcomeMessage);
                const { nickname } = store.getState();
                socket.emit('user_infos', {
                    nickname,
                });
            });
            next(action);
            return;
        }
        default :
            next(action);
    };
}; 