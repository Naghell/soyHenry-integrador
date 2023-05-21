import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.searchBar}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id)}}>Buscar</button>
      </div>
   );
}

export default SearchBar;