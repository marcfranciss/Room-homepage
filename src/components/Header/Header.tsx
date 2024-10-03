import "./header.sass";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

export const Header = () => {
  return (
    <header>
      <NavBarMobile />
      <Logo />
      <NavBar id='nav-main' className='nav-main' />
    </header>
  );
};
