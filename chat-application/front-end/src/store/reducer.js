import {
    SYNC_NICKNAME,
    SYNC_MESSAGE,
} from './actions'

const initialState = {
    nickname: '',
    message: '',
    messages: [{ id:'', author:'', content:'', }],
};

export default(state = initialState, action = {}) => {
    switch(action.type) {
        case SYNC_NICKNAME : {
            return {
                ...state,
                nickname: action.nickname,
            }
        }
        case SYNC_MESSAGE : {
            return {
                ...state,
                message: action.message,
            }
        }
        
        default: {
            return state;
        }
    }
};