import React from 'react';
import {Route, Switch} from 'react-router';

import '../styles/App.css';

//import components
import ChatBox from './ChatBox';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/chatzone">
          <ChatBox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
