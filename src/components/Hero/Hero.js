import ContainerStyled from 'components/Container/Container.styled';
import {
  WrapperStyled,
  HeroStyled,
  HeroImage,
  HeroWrapperStyled,
  HeroTitleStyled,
  HeroDescStyled,
  HeroBtn,
  BtnInner,
  RandomStyled,
  RandomText,
} from './Hero.styled';

const Hero = () => {
  return (
    <section>
      <ContainerStyled>
        <WrapperStyled>
          <HeroStyled>
            <HeroImage />
            <HeroWrapperStyled>
              <HeroTitleStyled>Thor</HeroTitleStyled>
              <HeroDescStyled>
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </HeroDescStyled>
              <div
                style={{
                  display: 'flex',
                  gap: '30px',
                }}
              >
                <HeroBtn>
                  <BtnInner>Homepage</BtnInner>
                </HeroBtn>
                <HeroBtn className="secondary">
                  <BtnInner className="secondary">Wiki</BtnInner>
                </HeroBtn>
              </div>
            </HeroWrapperStyled>
          </HeroStyled>
          <RandomStyled>
            <RandomText style={{ marginBottom: '41px' }}>
              Random character for today!
              <br />
              Do you want to get to know him better?
            </RandomText>
            <RandomText style={{ marginBottom: '17px' }}>
              Or choose another one
            </RandomText>
            <HeroBtn>
              <BtnInner>Try it</BtnInner>
            </HeroBtn>
          </RandomStyled>
        </WrapperStyled>
      </ContainerStyled>
    </section>
  );
};

export default Hero;
