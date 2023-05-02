import style from './Cards.module.css';
import Card from '../Card/Card';
import characters from '../../data.js';

export default function Cards(props) {
   return (
   <div className={style.container}>
      {characters.map((character) => (
         <Card
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>
)};
