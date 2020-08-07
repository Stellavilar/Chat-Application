// Action creator from Redux: used to change the state or trigger an effect
export const SYNC_NICKNAME = 'actions/SYNC_NICKNAME';
export const ENTER_CHAT = 'actions/ENTER_CHAT';

export const enterChat = (history) => ({type: ENTER_CHAT, history });

