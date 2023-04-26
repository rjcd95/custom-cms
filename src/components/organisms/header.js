import Logo from 'components/atoms/logo';
import Menu from 'components/molecules/menu';
import Search from 'components/molecules/search';

const Header = () => (
  <header className="header">
    <Logo />
    <Menu />
    <Search />
  </header>
);

export default Header;