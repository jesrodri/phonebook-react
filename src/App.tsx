import React from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <nav>
        <SearchBar />
      </nav>
    </div>
  );
}

export default App;
