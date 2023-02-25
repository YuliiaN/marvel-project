import { HeroDescStyled } from 'components/Hero/Hero.styled';
import {
  CharComicsTitleStyled,
  CharComicsItemStyled,
  CharComicsListStyled,
} from './CharDesc.styled';

const CharDesc = ({ comics, desc }) => {
  const isDesc = desc ? desc : `There is no character's description`;
  return (
    <>
      <HeroDescStyled style={{ marginTop: '15px' }}>{isDesc}</HeroDescStyled>
      <CharComicsTitleStyled>Comics</CharComicsTitleStyled>
      <CharComicsListStyled>
        {comics.map(({ id, title, urls }) => (
          <CharComicsItemStyled key={id}>
            <a
              href={urls[0].url}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {title}
            </a>
          </CharComicsItemStyled>
        ))}
      </CharComicsListStyled>
    </>
  );
};

export default CharDesc;
