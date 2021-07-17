import { Link, useLocation } from 'react-router-dom'
import headerLogo from "../images/header-logo.svg";

function Header(props) {
  const location = useLocation();

  return (
    <header className="header page__header">
      <Link className="header__link"  to="/" rel="noreferrer">
        <img src={headerLogo} alt="Логотип Mesto" className="header__logo" />
      </Link>
      <div className='header__box'>
        {props.loggedIn ? (
          <>
            <p className='header__email'>
              {props.userEmail}
              </p>
            <Link
              className="header__link header__signout"
              onClick={props.onSignOut}
              to="/signin">
              Выйти
            </Link>
          </>
        ) : (
          <Link
            className="header__link header__signin"
            to={`${location.pathname === '/signin' ? '/signup' : '/signin'}`}>
            {`${location.pathname === '/signin' ? 'Регистрация' : 'Войти'}`}
          </Link>
        )
        }
      </div>
    </header>
  );
}

export default Header;