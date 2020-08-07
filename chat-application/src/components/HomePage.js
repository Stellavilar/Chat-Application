import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import logo from '../img/REACT CHAT.png';

const HomePage = () => {
    return (
        <div className="homepage">
            <img src={logo} alt="logo"/>
            <Form>
                <Form.Field>
                    <label>Pseudo:</label>
                    <input placeholder='Entrez votre Pseudo ici...' />
                </Form.Field>
                <Button type='submit'>Valider</Button>
            </Form>
        </div>
    );
};

export default HomePage;