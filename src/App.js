import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

function App() {
   const [characters, setCharacters] = useState([]);

   return (
      <div className='App'>
         <Nav onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
