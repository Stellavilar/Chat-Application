import React from 'react';
import '../styles/App.css';

//import components
import ChatBox from './ChatBox';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ChatBox />
    </div>
  );
}

export default App;
