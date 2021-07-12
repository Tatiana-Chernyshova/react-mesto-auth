import headerLogo from '../images/header-logo.svg'; 

function Header() {
  return (
    <header className="header page__header">
      <a href="#" className="header__link" rel="noopener" >
        <img src={headerLogo} alt="Логотип Mesto" className="header__logo" />
      </a>
      <a href="#" class="header__link header__auth" target="_blank" rel="noopener">Войти</a>
    </header> 
  );
}

export default Header;