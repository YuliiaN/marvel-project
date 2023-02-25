import ContainerStyled from 'components/Container/Container.styled';
import {
  LogoStyled,
  NavStyled,
  NavListStyled,
  NavListItemStyled,
  SeparatorStyled,
} from './Header.styled';
import { routes } from 'routes';
import { NavLink, Link } from 'react-router-dom';

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
        <NavStyled>
          <NavListStyled>
            <NavListItemStyled>
              <NavLink to={routes.HOME}>Characters</NavLink>
            </NavListItemStyled>
            <SeparatorStyled>/</SeparatorStyled>
            <NavListItemStyled>
              <NavLink to={routes.COMICS}>Comics</NavLink>
            </NavListItemStyled>
          </NavListStyled>
        </NavStyled>
      </ContainerStyled>
    </header>
  );
};

export default Header;
