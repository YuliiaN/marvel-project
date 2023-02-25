import { useState, useEffect } from 'react';
import MarvelService from 'services/MarvelService';
import ContainerStyled from 'components/Container/Container.styled';
import {
  WrapperStyled,
  HeroStyled,
  HeroWrapperStyled,
  HeroTitleStyled,
  HeroDescStyled,
  HeroBtn,
  BtnInner,
  RandomStyled,
  RandomText,
} from './Hero.styled';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export const api = new MarvelService();

const Hero = () => {
  const [heroData, setHeroData] = useState({
    name: '',
    description: '',
    thumbnail: '',
    homepage: '',
    wiki: '',
    loading: false,
    error: false,
  });

  useEffect(() => {
    fetchRandomHero();
  }, []);

  async function fetchRandomHero() {
    try {
      setHeroData({ loading: true });
      const characterId = Math.floor(
        Math.random() * (1011400 - 1011000) + 1011000
      );
      const { name, description, thumbnail, urls } = await api.getCharacterById(
        characterId
      );
      setHeroData({
        name,
        description,
        thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
        homepage: urls[0].url,
        wiki: urls[1].url,
        loading: false,
      });
    } catch (error) {
      console.log(error.message);
      setHeroData({ loading: false, error: true });
    }
  }

  const { name, description, thumbnail, homepage, wiki, loading, error } =
    heroData;

  return (
    <section>
      <ContainerStyled>
        <WrapperStyled>
          <HeroStyled>
            {loading && <Loader />}
            <Error error={error} />
            {!loading && !error && (
              <>
                <img src={thumbnail} alt={`${name}`} width="180" height="180" />
                <HeroWrapperStyled>
                  <HeroTitleStyled>{name}</HeroTitleStyled>
                  <HeroDescStyled>{description}</HeroDescStyled>
                  <div
                    style={{
                      display: 'flex',
                      gap: '30px',
                    }}
                  >
                    <HeroBtn href={homepage}>
                      <BtnInner>Homepage</BtnInner>
                    </HeroBtn>
                    <HeroBtn href={wiki} className="secondary">
                      <BtnInner className="secondary">Wiki</BtnInner>
                    </HeroBtn>
                  </div>
                </HeroWrapperStyled>
              </>
            )}
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
            <HeroBtn onClick={fetchRandomHero}>
              <BtnInner>Try it</BtnInner>
            </HeroBtn>
          </RandomStyled>
        </WrapperStyled>
      </ContainerStyled>
    </section>
  );
};

export default Hero;
