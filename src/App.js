import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h4 className="app-title"> App Title</h4>
            </header>
            <main className="app-main"></main>
        </div>
    );
}

export default App;
