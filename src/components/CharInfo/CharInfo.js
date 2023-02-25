// import CharInfoStyled from './CharInfo.styled';
import CharCard from './CharCard/CharCard';
import CharDesc from './CharDesc/CharDesc';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';

const CharInfo = ({ charId }) => {
  const [comics, setComics] = useState([]);
  const [char, setChar] = useState({
    name: '',
    description: '',
    thumbnail: '',
    homepage: '',
    wiki: '',
  });

  useEffect(() => {
    if (!charId) {
      return;
    }

    const activeItem = document.getElementById(charId);
    activeItem.classList.toggle('selected');

    (async function getCharacterDetails() {
      const res = await api.getCharactersComics(charId);
      setComics(res);
      const { name, description, thumbnail, urls } = await api.getCharacter(
        charId
      );
      setChar({
        name,
        description,
        thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
        homepage: urls[0].url,
        wiki: urls[1].url,
      });
    })();
  }, [charId]);

  return (
    // <CharInfoStyled>
    <>
      <CharCard char={char} />
      <CharDesc comics={comics} desc={char.description} />
    </>
    // </CharInfoStyled>
  );
};

export default CharInfo;
