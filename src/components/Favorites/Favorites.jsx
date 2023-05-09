import { connect } from 'react-redux';
import Card from '../Card/Card';
import style from './Favorites.module.css';

const Favorites = ({ myFav }) => {
    return (
        <div>
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