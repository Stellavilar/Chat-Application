import {
    SYNC_NICKNAME,
} from './actions'

const initialState = {
    nickname: '',
};

export default(state = initialState, action = {}) => {
    switch(action.type) {
        case SYNC_NICKNAME : {
            return {
                ...state,
                nickname: action.nickname,
            }
        }
        default: {
            return state;
        }
    }
};