import style from './SearchBar.module.css';

export default function SearchBar(props) {
    console.log(props.name)
    return (
       <div>
          <input type='search' />
          <button onClick={() => props.onSearch(props.characterID)}>Agregar</button>
       </div>
    );
 }