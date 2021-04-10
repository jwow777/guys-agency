import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";

export default function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleCartClick = () => {
    setIsOpenPopup(true);
    // setTimeout(() => setIsOpenPopup(false), 3000);
  } 

  useEffect(() => {
    const closeBasket = (e) => {
      if (e.target.classList.contains('popup_opened')) {
        setIsOpenPopup(false);
      }
    } 
    if (isOpenPopup) {
      window.addEventListener('click', closeBasket);
    }
    return () => window.removeEventListener('click', closeBasket);
  }, [isOpenPopup])
  

  return (
    <>
      <Header/>
      <Main isOpen={handleCartClick}/>
      <Footer/>
      <Popup isOpen={isOpenPopup}/>
    </>
  );
}