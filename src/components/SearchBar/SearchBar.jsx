import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.searchBar}>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;