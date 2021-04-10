import product from '../images/product.png';

export default function Main({isOpen}) {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <main className="content">
      <div>
        <a href="/" className="content__link">Каталог</a>
        <span> / </span>
        <a href="/" className="content__link">Запчасти</a>
        <span> / </span>
        <a href="/" className="content__link">Двигатель</a>
        <span> / </span>
        <a href="/" className="content__link">Винты гребные</a>
        <span> / </span>
        <span className="content__text content__text_fade">Гребной винт 3x7.3x5, Solas, 4011-073-05S</span>
      </div>
      <h1 className="title content__title">Гребной винт 3x7.3x5, Solas, 4011-073-05S</h1>
      <p className="content__code">Артикул: 401107305S</p>
      <div className="content__block">
        <img src={product} alt="Вентилятор"/>
        <form className="content__cart" onSubmit={handleSubmit}>
          <p className="content__model">Модель: 3 лопасти</p>
          <div className="content__cart-container">
            <button type="button" className="button button_dark button_large content__button">3 лопасти</button>
            <button type="button" className="button button_white button_large content__button">4 лопасти</button>
          </div>
          <ul className="content__lists">
            <li className="content__list">
              <span className="content__text content__text_fade">OEM</span>
              <span className="content__text content__text_bold">3411-135-13</span>
            </li>
            <li className="content__list">
              <span className="content__text content__text_fade">Производитель техники</span>
              <span className="content__text content__text_bold">Yamaha</span>
            </li>
            <li className="content__list">
              <span className="content__text content__text_fade">Бренд</span>
              <span className="content__text content__text_bold">Skipper</span>
            </li>
            <li className="content__list">
              <span className="content__text content__text_fade">Материал</span>
              <span className="content__text content__text_bold">Алюминий</span>
            </li>
          </ul>
          <div className="content__cart-container">
            <p className="content__price content__price_current">3 940 ₽</p>
            <p className="content__price content__price_old">1 970 ₽</p>
          </div>
          <button type="submit" className="button button_red button_large content__button content__basket" onClick={isOpen}>В корзину</button>
        </form>
      </div>
      <h2 className="content__characteristics">Характеристики</h2>
      <div className="content__characteristics-container">
        <ul className="content__lists">
          <li className="content__list">
            <span className="content__text content__text_fade">OEM</span>
            <span className="content__text content__text_bold">3411-135-13</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Производитель техники</span>
            <span className="content__text content__text_bold">Yamaha</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Бренд</span>
            <span className="content__text content__text_bold">Skipper</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Количество лопастей</span>
            <span className="content__text content__text_bold">3 лопасти</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Материал</span>
            <span className="content__text content__text_bold">Алюминий</span>
          </li>
        </ul>
        <ul className="content__lists">
          <li className="content__list">
            <span className="content__text content__text_fade">Диаметр, дюйм</span>
            <span className="content__text content__text_bold">Шлицевая</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Мощность, л.с.</span>
            <span className="content__text content__text_bold">От 9.9 до 15 </span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Шаг, дюйм</span>
            <span className="content__text content__text_bold">11</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Тип лодочного мотора</span>
            <span className="content__text content__text_bold">ПЛМ</span>
          </li>
          <li className="content__list">
            <span className="content__text content__text_fade">Посадка на вал</span>
            <span className="content__text content__text_bold">Шлицевая</span>
          </li>
        </ul>
      </div>
      <h2 className="content__application">Применение</h2>
      <ul className="content__lists">
          <li className="content__list">
            <span className="">4-тактные моторы Suzuki</span>
            <div>
              <span className="content__text content__text_underline">DF9.9B;</span>
              <span className="content__text content__text_underline">DF8A;</span>
              <span className="content__text content__text_underline">DF10A</span>
            </div>
          </li>
          <li className="content__list">
            <span className="">2-тактные моторы Suzuki</span>
            <div>
              <span className="content__text content__text_underline">DT9.9A;</span>
            </div>
          </li>
        </ul>
    </main>
  );
}