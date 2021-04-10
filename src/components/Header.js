import logo from '../images/logo.svg';

export default function Header() {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <header className="header">
      <div className="header_top">
        <nav className="menu">
          <ul className="menu__items">
            <li>
              <a href="/" className="menu__link">Доставка</a>
            </li>
            <li>
              <a href="/" className="menu__link">Оплата</a>
            </li>
            <li>
              <a href="/" className="menu__link">Возврат</a>
            </li>
            <li>
              <a href="/" className="menu__link">Магазин</a>
            </li>
          </ul>
        </nav>
        <a href="tel:74957440050" className="header__phone">+7 495 744-00-50</a>     
      </div>
      <div className="header_bottom">
        <img src={logo} alt="WRUMP"/>
        <button type="button" className="button button_dark button_medium header__katalog">Каталог</button>
        <form onSubmit={handleSubmit}>
          <input type="text" className="header__input" placeholder="Поиск по OEM, производителю, модели и категории"/>
        </form>
        <button type="button" className="button button_small header__user"></button>
        <button type="button" className="button button_small header__basket"></button>
      </div>
    </header>
  );
}