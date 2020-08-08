import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Header, Input } from 'semantic-ui-react';
import { MessageBox } from 'react-chat-elements';

import 'react-chat-elements/dist/main.css';

import { sendMessage, syncMessage } from '../store/actions';


const ChatBox = () => {
    const dispatch = useDispatch();
    const currentMessage = useSelector((state) => state.message);
    const messages = useSelector((state) => state.messages)
     .map((message, index) => <MessageBox 
                        key={index}
                        position={'right'}
                        type={'text'}
                        text={message.content}
                        title={message.author}
                        />)
  
    return (
        <div className="chat-box">
            <Header as="h3">Contact name</Header>
            <Segment>
                <Segment className="text-area">
                    {messages}
                </Segment>
                <form
                 onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(sendMessage())
                 }}>
                    <Input
                     placeholder="Votre Message"
                     onChange={(e)=>{dispatch(syncMessage(e.target.value));
                    }}
                     type="text"
                     value={currentMessage}
                     
                    />
                    <button type='submit'>Envoyer</button>
                </form>

            </Segment>
        </div>
    );
};

export default ChatBox;