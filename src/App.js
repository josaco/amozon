import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

function App() {
  return (
    <div className="app">
      <Menu nombre="JoSaCo" />
      <List />
    </div>
  );
}

export default App;
