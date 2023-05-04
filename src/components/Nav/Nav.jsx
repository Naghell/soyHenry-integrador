import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

function Nav({onSearch}) {
  return (
    <nav className={style.nav}>
      <section>
        <button>
          <Link to='/home'>Home</Link>'
        </button>
        <button>
          <Link to='/about'>About</Link>
        </button>
      </section>
      <section>
        <SearchBar onSearch={onSearch}/>
      </section>
    </nav>
  )
}

export default Nav