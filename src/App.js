import './App.css';
import Header from './components/Header/Header.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = () => {
      setCharacters([...characters, example]);
   }

   return (
      <div className='App'>
         <Header/>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
