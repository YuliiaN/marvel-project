import { useState, useEffect } from 'react';
import MarvelService from 'services/MarvelService';
import ContainerStyled from 'components/Container/Container.styled';
import { HeroBtn, BtnInner, RandomStyled } from './Hero.styled';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import mjolnir from '../../img/mjolnir.png';

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
        <div className="flex justify-center h-[15.625rem] shadow-3xl">
          <div className="w-2/4 bg-white flex items-center gap-[1.875rem] py-[2.188rem] px-10">
            {loading && <Loader />}
            <Error error={error} />
            {!loading && !error && (
              <>
                <img src={thumbnail} alt={`${name}`} width="180" height="180" />
                <div className="flex flex-col gap-[0.813rem]">
                  <h2 className="font-bold uppercase text-[1.375rem] leading-[1.625rem]">
                    {name}
                  </h2>
                  <p className="text-sm leading-4">{description}</p>
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
                </div>
              </>
            )}
          </div>
          <div
            className="w-2/4 py-[2.188rem] px-10 bg-black
          font-bold text-2xl leading-7 text-[#fff]
          bg-mjolnir bg-no-repeat bg-[length:202px]"
            style={{ backgroundPosition: 'bottom 14px right -37px' }}
          >
            <p className="mb-[41px]">
              Random character for today!
              <br />
              Do you want to get to know him better?
            </p>
            <p className="mb-[17px]">Or choose another one</p>
            <HeroBtn onClick={fetchRandomHero} className="btn">
              <BtnInner className="inner">Try it</BtnInner>
            </HeroBtn>
          </div>
        </div>
      </ContainerStyled>
    </section>
  );
};

export default Hero;
