import productOne from '../images/product_mini_one.png';
import productTwo from '../images/product_mini_two.png';

export default function Popup({isOpen}) {
  return (
    <div className={`popup${isOpen ? ' popup_opened' : ""}`}>
      <div className="popup__container">
        <div className="popup__block popup__block_middle">
          <h2 className="title popup__title">Корзина:</h2>
          <p className="popup__price">2 420 ₽</p>
        </div>
        <ul className="popup__lists">
          <li className="popup__list">
            <img src={productOne} className="popup__block popup__block_left" alt="товар"/>
            <div className="popup__block popup__block_center">
              <p className="popup__text popup__text_top">Гребной винт 3x7.3x5, Solas, 4011-073-05S...</p>
              <div className="popup__block popup__block_middle">
                <p className="popup__text popup__text_middle popup__text_red">1 970 ₽</p>
                <p className="popup__text popup__text_middle popup__text_fade">1 970 ₽</p>
              </div>
              <p className="popup__text popup__text_bottom">В наличии</p>
            </div>
            <div className="popup__block popup__block_right">
              <button type="button" className="button button_small popup__trash"/>
              <div className="button_large popup__button-container">
                <button className="button popup__button popup__button_plus"/>
                <span>1</span>
                <button className="button popup__button popup__button_minus"/>
              </div>
            </div>
          </li>
          <li className="popup__list">
            <img src={productTwo} className="popup__block popup__block_left" alt="товар"/>
            <div className="popup__block popup__block_center">
              <p className="popup__text popup__text_top">Фильтр топливный Fleetguard</p>
              <p className="popup__text popup__text_middle popup__text_red">450 ₽</p>
              <p className="popup__text popup__text_bottom">В наличии</p>
            </div>
            <div className="popup__block popup__block_right">
              <button type="button" className="button button_small popup__trash"/>
              <div className="button_large popup__button-container">
                <button className="button popup__button popup__button_plus"/>
                <span>1</span>
                <button className="button popup__button popup__button_minus"/>
              </div>
            </div>
          </li>
        </ul>
        <button type="button" className="button button_red button_large popup__submit">Перейти в корзину</button>
      </div>
    </div>
  );
}