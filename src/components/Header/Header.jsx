import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <img src="./logo.png" alt="logo" />
    </div>
  )
}

export default Header