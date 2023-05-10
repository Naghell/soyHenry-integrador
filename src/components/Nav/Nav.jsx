import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

function Nav({onSearch, logout}) {
  return (
    <nav className={style.nav}>
      <section className={style.nav__links}>
        <button>
          <Link className={style.nav__link} to='/home'>Home</Link>'
        </button>
        <button>
          <Link className={style.nav__link} to='/about'>About</Link>
        </button>
        <button>
          <Link className={style.nav__link} to='/favorites'>Favs</Link>
        </button>
      </section>
      <section>
        <SearchBar onSearch={onSearch}/>
      </section>
      <button className={style.logout} onClick={logout}>Salir</button>
    </nav>
  )
}

export default Nav