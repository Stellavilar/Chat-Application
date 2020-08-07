import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router';

import logo from '../img/REACT CHAT.png';

import { SYNC_NICKNAME, enterChat } from '../store/actions';

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const nickname = useSelector((state) => state.nickname);
    
    return (
        <div className="homepage">
            <img src={logo} alt="logo"/>
            <Form
             onSubmit={(e) => {
                 e.preventDefault();
                 dispatch(enterChat(history))

             }}>
                <Form.Field>
                    <label>Pseudo:</label>
                    <input 
                     placeholder='Entrez votre Pseudo ici...'
                     value={nickname}
                     onChange={(evt) => { const newNickname = evt.target.value;
                        dispatch({type: SYNC_NICKNAME, nickname: newNickname})
                    }}/>
                </Form.Field>
                <Button type='submit'color="green" >Valider</Button>
            </Form>
        </div>
    );
};

export default HomePage;