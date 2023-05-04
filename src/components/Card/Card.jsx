import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.card}>
         <div className={style.info}>
            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <img src={image} alt='' />
      </div>
   );
}

export default Card;
