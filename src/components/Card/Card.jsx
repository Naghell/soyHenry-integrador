import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFav }) {
   const [isFav, setFav] = useState(false);

   useEffect(() => {
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
      <div className={style.card}>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
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
