import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import style from './Favorites.module.css';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ({ myFav }) => {
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    const [aux, setAux] = useState(false);

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="All">Todos</option>
            </select>
            {myFav.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin.name}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFav: state.myFav
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)