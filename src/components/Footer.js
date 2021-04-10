export default function Footer() {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <footer className="footer">
      <h2 className="title footer__title">Консультация</h2>
      <p className="subtitle footer__subtitle">Заполните форму ниже и наш мастер свяжется&nbsp;с&nbsp;вами,&nbsp;чтобы&nbsp;ответить на ваши вопросы</p>
      <form className="footer__form" onSubmit={handleSubmit}>
        <div>
          <label className="footer__label"></label>
          <input type="text" className="footer__input" placeholder="Имя"/>
        </div>
        <div>
          <label className="footer__label">Телефон или e-mail</label>
          <input type="text" className="footer__input" placeholder="Номер или почта"/>
        </div>
        <button type="submit" className="button button_white footer__button">Получить консультацию</button>
      </form>
    </footer>
  );
}