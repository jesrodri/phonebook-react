import React from 'react';
import logo from './logo.svg';
import ContactCard from './components/ContactCard';
import SearchBar from './components/SearchBar';
import './App.css';
import contacts from "./assets/contacts.json";

function App() {
  return (
    <div className="bg-gray-800">
      <nav>
        <SearchBar />
      </nav>
      <section>
        <ContactCard contacts={contacts}/>
      </section>
    </div>
  );
}

export default App;
