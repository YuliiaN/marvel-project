import { HeroTitleStyled } from 'components/Hero/Hero.styled';

const Error = ({ error }) => {
  return (
    error && (
      <HeroTitleStyled style={{ margin: '0 auto' }}>
        We couldn't find a hero
      </HeroTitleStyled>
    )
  );
};

export default Error;
