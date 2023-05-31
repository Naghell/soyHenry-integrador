import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const dispatch = useDispatch();
   const myFav = useSelector(state => state.myFav);
   const [isFav, setFav] = useState(false);

   useEffect(() => {
      if (Array.isArray(myFav)) {
        const isFavorite = myFav.some(fav => fav.id === id);
        setFav(isFavorite);
      }
    }, [myFav, id]);
    
   const handleFavorite = () => {
      if (isFav) {
         setFav(false);
         dispatch(removeFav(id));
      } else {
         setFav(true);
         dispatch(addFav({ id, name, status, species, gender, origin, image, onClose }));
      }
   }

   return (
      <article className={style.card}>
         <section className={style.cardsup}>
            <img src={image} alt='' />
            <div>
               <Link className={style.name} to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
               <h2 className={style.description}><span>{gender}</span> {species} de <span>{origin}</span>, se encuentra {status}.</h2>
            </div>
            <div className={style.botones}>
               <button onClick={() => onClose(id)}><img src='./icons/delete.svg'/></button>
               <button onClick={handleFavorite}>
                  {isFav ? <img src='./icons/fav.svg'/> : <img src='./icons/nofav.svg'/>}
               </button>
            </div>
         </section>
      </article>

   );
}


export default Card;
