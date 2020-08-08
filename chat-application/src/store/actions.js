// Action creator from Redux: used to change the state or trigger an effect
export const SYNC_NICKNAME = 'actions/SYNC_NICKNAME';
export const ENTER_CHAT = 'actions/ENTER_CHAT';
export const SYNC_MESSAGE = 'actions/SYNC_MESSAGE';
export const SEND_MESSAGE = 'actions/SEND_MESSAGE';


export const enterChat = (history) => ({type: ENTER_CHAT, history });

export const sendMessage = () => ({type: SEND_MESSAGE });

export const syncMessage = (message) => ({type: SYNC_MESSAGE, message });