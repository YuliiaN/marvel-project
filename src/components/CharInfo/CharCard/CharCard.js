import {
  HeroStyled,
  HeroWrapperStyled,
  HeroTitleStyled,
  BtnInner,
  HeroBtn,
} from 'components/Hero/Hero.styled';

const CharCard = ({ char }) => {
  return (
    <HeroStyled
      style={{
        width: '100%',
        padding: '0',
        alignItems: 'flex-start',
        gap: '25px',
      }}
    >
      <img
        alt={char.name}
        src={char.thumbnail}
        style={{ width: '150px', height: '150px' }}
      />
      <HeroWrapperStyled style={{ gap: '0' }}>
        <HeroTitleStyled style={{ marginBottom: '35px' }}>
          {char.name}
        </HeroTitleStyled>
        <div>
          <HeroBtn href={char.homepage} style={{ marginBottom: '10px' }}>
            <BtnInner>Homepage</BtnInner>
          </HeroBtn>
          <HeroBtn href={char.wiki} className="secondary">
            <BtnInner className="secondary">Wiki</BtnInner>
          </HeroBtn>
        </div>
      </HeroWrapperStyled>
    </HeroStyled>
  );
};

export default CharCard;
