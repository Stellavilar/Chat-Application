import { ENTER_CHAT } from '../actions';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case ENTER_CHAT: {
            //Connexion au serveur central à l'entrée du chat:
            const socket = window.io ('http://localhost:3001/');
            console.log(socket);
          break;
        }
        default :
            next(action);
    };
}; 