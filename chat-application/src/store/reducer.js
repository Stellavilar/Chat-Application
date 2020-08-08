import {
    SYNC_NICKNAME,
    SYNC_MESSAGE,
    SEND_MESSAGE,
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
        case SEND_MESSAGE : {
            const newMessage = {
                id:'',
                author: state.nickname,
                content: state.message
            };
            return {
                ...state,
                //Add newMessage to messages list
                messages: [...state.messages, newMessage],
            }
        }
       
        default: {
            return state;
        }
    }
};