import {
  HeroStyled,
  // HeroImage,
  HeroWrapperStyled,
  HeroTitleStyled,
  BtnInner,
  HeroBtn,
} from 'components/Hero/Hero.styled';

const CharCard = () => {
  return (
    <HeroStyled
      style={{
        width: '100%',
        padding: '0',
        alignItems: 'flex-start',
        gap: '25px',
      }}
    >
      {/* <HeroImage style={{ width: '150px', height: '150px' }} /> */}
      <HeroWrapperStyled style={{ gap: '0' }}>
        <HeroTitleStyled style={{ marginBottom: '35px' }}>Thor</HeroTitleStyled>
        <div>
          <HeroBtn style={{ marginBottom: '10px' }}>
            <BtnInner>Homepage</BtnInner>
          </HeroBtn>
          <HeroBtn className="secondary">
            <BtnInner className="secondary">Wiki</BtnInner>
          </HeroBtn>
        </div>
      </HeroWrapperStyled>
    </HeroStyled>
  );
};

export default CharCard;
