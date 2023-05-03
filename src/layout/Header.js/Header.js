import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import ContainerStyled from 'components/Container/Container.styled';
import {
  LogoStyled,
  NavListStyled,
  NavListItemStyled,
  SeparatorStyled,
} from './Header.styled';

const Header = () => {
  return (
    <header style={{ padding: '50px 0' }}>
      <ContainerStyled
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <LogoStyled>
          <Link to={routes.HOME}>
            <span style={{ color: '#9F0013' }}>Marvel</span> information portal
          </Link>
        </LogoStyled>
        <nav>
          <NavListStyled>
            <NavListItemStyled>
              <NavLink to={routes.HOME} activeClassName="active">
                Characters
              </NavLink>
            </NavListItemStyled>
            <SeparatorStyled>/</SeparatorStyled>
            <NavListItemStyled>
              <NavLink to={routes.COMICS} activeClassName="active">
                Comics
              </NavLink>
            </NavListItemStyled>
          </NavListStyled>
        </nav>
      </ContainerStyled>
    </header>
  );
};

export default Header;
