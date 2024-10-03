import "./logo.sass";
import pageLogo from "../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <div className='logo-container'>
      <a href='/'>
        <img src={pageLogo} alt='Room homepage logo' loading='lazy' />
      </a>
    </div>
  );
};
