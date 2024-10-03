import "./navBar.sass";

interface NavBarProps {
  id?: string;
  className?: string;
}
export const NavBar = ({ id, className }: NavBarProps) => {
  return (
    <nav id={id} className={className}>
      <a href='#home'>home</a>
      <a href='#shop'>shop</a>
      <a href='#about'>about</a>
      <a href='#contact'>contact</a>
    </nav>
  );
};
