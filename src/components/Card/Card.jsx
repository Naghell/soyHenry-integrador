import style from './Card.module.css';

function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.info}>
            <h2>{props.name}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
            <button onClick={props.onClose}>X</button>
         </div>
         <img src={props.image} alt='' />
      </div>
   );
}

export default Card;
