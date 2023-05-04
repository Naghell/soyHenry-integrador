import './App.css';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';



function App() {
   const [characters, setCharacters] = useState([]);

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id);
         })
      );
   };

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   return (
     <div className="App">
       <Header />
       <Nav onSearch={onSearch} />
       <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About/>} />
         <Route path="/detail/:id" element={<Detail/>} />
       </Routes>
     </div>
   );
}

export default App;
