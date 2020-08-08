import { ENTER_CHAT } from '../actions';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case ENTER_CHAT :{
            action.history.push('/chatzone');
            break;
        }
        default :
            next(action);
    };
};