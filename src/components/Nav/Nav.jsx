import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

function Nav({onSearch, logout}) {
  return (
    <nav className={style.nav}>
      <section>
        <button>
          <Link to='/home'>Home</Link>'
        </button>
        <button>
          <Link to='/about'>About</Link>
        </button>
        <button onClick={logout}>
          <Link to='/about'>Logout</Link>
        </button>
        <button>
          <Link to='/favorites'>Favs</Link>
        </button>
      </section>
      <section>
        <SearchBar onSearch={onSearch}/>
      </section>
    </nav>
  )
}

export default Nav