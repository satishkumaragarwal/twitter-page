import React from 'react';
import logo from './home.svg';
import './App.css';
import Messages from './messages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Messages
      </header>
      <section className="App-section">
        <Messages />
      </section>
      <footer className="App-footer">
        <i class="fas fa-home"></i>
        <i class="fas fa-search"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-envelope"></i>
      </footer>
    </div>
  );
}

export default App;
