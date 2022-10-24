import ContactCard from './components/ContactCard';
import './App.css';
import contacts from "./assets/contacts.json";

function App() {
  return (
    <div className="bg-gray-800">
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ContactCard contacts={contacts}/>
      </section>
    </div>
  );
}

export default App;
