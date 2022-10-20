import React from 'react';
import logo from './logo.svg';
import ContactCard from './components/ContactCard';
import './App.css';
import contacts from "./assets/contacts.json";

function App() {
  return (
    <div className="bg-gray-800">
      <section>
        <ContactCard contacts={contacts}/>
      </section>
    </div>
  );
}

export default App;
