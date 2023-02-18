import ContainerStyled from 'components/Container/Container.styled';
import {
  LogoStyled,
  NavStyled,
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
          <a href="/">
            <span style={{ color: '#9F0013' }}>Marvel</span> information portal
          </a>
        </LogoStyled>
        <NavStyled>
          <NavListStyled>
            <NavListItemStyled style={{ color: '#9F0013' }}>
              <a href="/">Characters </a>
            </NavListItemStyled>
            <SeparatorStyled>/</SeparatorStyled>
            <NavListItemStyled>
              <a href="/">Comics</a>
            </NavListItemStyled>
          </NavListStyled>
        </NavStyled>
      </ContainerStyled>
    </header>
  );
};

export default Header;
