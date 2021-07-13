import { Link } from 'react-router-dom'; 
import headerLogo from '../images/header-logo.svg';

function Header(props) {
  return (
    <header className="header page__header">
      <a href="#" className="header__link" rel="noopener" >
        <img src={headerLogo} alt="Логотип Mesto" className="header__logo" />
      </a>
      {/* <a href="#" class="header__link header__auth" target="_blank" rel="noopener">Войти</a> */}
      <Link to={props.url} className="header__link header__auth">
        {props.text}
      </Link>
    </header> 
  );
}

export default Header;