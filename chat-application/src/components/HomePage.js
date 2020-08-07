import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import logo from '../img/REACT CHAT.png';

import { SYNC_NICKNAME } from '../store/actions';

const HomePage = () => {
    const dispatch = useDispatch();
    const nickname = useSelector((state) => state.nickname);
    return (
        <div className="homepage">
            <img src={logo} alt="logo"/>
            <Form>
                <Form.Field>
                    <label>Pseudo:</label>
                    <input 
                     placeholder='Entrez votre Pseudo ici...'
                     value={nickname}
                     onChange={(evt) => { const newNickname = evt.target.value;
                        dispatch({type: SYNC_NICKNAME, nickname: newNickname})
                    }}/>
                </Form.Field>
                <Button type='submit'>Valider</Button>
            </Form>
        </div>
    );
};

export default HomePage;