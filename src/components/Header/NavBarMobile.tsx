import burgerBtn from "../../assets/images/icon-hamburger.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import "./navBarMobile.sass";
import { useState } from "react";

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("dialog-open");
    } else {
      document.body.classList.remove("dialog-open");
    }
  };
  return (
    <div className='navMobile-container'>
      <button
        type='button'
        className='btn-burger'
        onClick={handleDialogOpen}
        aria-controls='nav-mobile'
        aria-expanded={isOpen}
        aria-label='Navbar toggler'>
        <img src={burgerBtn} alt='' />
      </button>
      <div
        id='nav-mobile'
        role='modal'
        className={`nav-dialog ${isOpen ? "is-open" : "is-close"}`}
        aria-atomic={isOpen}
        aria-live={isOpen ? "assertive" : "off"}>
        <div className='dialog-container'>
          <button
            type='button'
            className='btn-close'
            onClick={handleDialogOpen}
            aria-controls='nav-mobile'
            aria-expanded={isOpen}
            aria-label='Navbar toggler'>
            <img src={closeBtn} alt='' />
          </button>
          <nav className='nav-links'>
            <a href='/'>home</a>
            <a href='/'>shop</a>
            <a href='/'>about</a>
            <a href='/'>contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};
