import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFav }) {
   const [isFav, setFav] = useState(false);

   const handleFavorite = () => {
      if (myFav.some((fav) => fav.id === id)) {
        setFav(!isFav);
        removeFav(id);
      } else {
        setFav(!isFav);
        addFav({ id, name, status, species, gender, origin, image, onClose });
      }
    };
    
    useEffect(() => {
      setFav(myFav.some((fav) => fav.id === id));
    }, [myFav]);

   return (
      <div className={style.card}>
         <img src={image} alt='' />
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
