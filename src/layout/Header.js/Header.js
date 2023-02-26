import { routes } from 'routes';
import { NavLink, Link } from 'react-router-dom';
import ContainerStyled from 'components/Container/Container.styled';

const Header = () => {
  return (
    <header className="py-12">
      <ContainerStyled className="flex justify-between items-center">
        <h1 className="font-bold text-2.5xl leading-8">
          <Link to={routes.HOME}>
            <span className="text-maroon">Marvel</span> information portal
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-2 items-center text-2xl font-bold leading-7">
            <li>
              <NavLink to={routes.HOME}>Characters</NavLink>
            </li>
            <span>/</span>
            <li>
              <NavLink to={routes.COMICS}>Comics</NavLink>
            </li>
          </ul>
        </nav>
      </ContainerStyled>
    </header>
  );
};

export default Header;
