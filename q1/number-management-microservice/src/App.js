import React from 'react';
import NumberList from './components/NumberList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Management Microservice</h1>
      </header>
      <main>
        <NumberList />
      </main>
    </div>
  );
}

export default App;
