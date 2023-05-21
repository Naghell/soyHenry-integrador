import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFav }) {
   const [isFav, setFav] = useState(false);

   useEffect((id) => {
      myFav.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFav]);

   const handleFavorite = () => {
      if (isFav) {
         setFav(false);
         removeFav(id);
      } else {
         setFav(true);
         addFav({ id, name, status, species, gender, origin, image, onClose });
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

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

const mapStateToProps = (state) => {
   return {
      myFav: state.myFav
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
