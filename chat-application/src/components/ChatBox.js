import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Header, Input, Button } from 'semantic-ui-react';

const ChatBox = () => {
    
    return (
        <div className="chat-box">
            <Header as="h3">Contact name</Header>
            <Segment>
                <form>
                    <Input
                     placeholder="Votre Message"
                    />
                    <Button type='submit'>Envoyer</Button>
                </form>

            </Segment>
        </div>
    );
};

export default ChatBox;