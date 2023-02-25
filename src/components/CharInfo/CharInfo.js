// import CharInfoStyled from './CharInfo.styled';
import CharCard from './CharCard/CharCard';
import CharDesc from './CharDesc/CharDesc';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';
import Loader from 'components/Loader/Loader';

const CharInfo = ({ charId }) => {
  const [comics, setComics] = useState([]);
  const [char, setChar] = useState({
    name: '',
    description: '',
    thumbnail: '',
    homepage: '',
    wiki: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!charId) {
      return;
    }

    const activeItem = document.getElementById(charId);
    activeItem.classList.toggle('selected');

    try {
      (async function getCharacterDetails() {
        const res = await api.getCharactersComics(charId);
        setComics(res);
        const { name, description, thumbnail, urls } =
          await api.getCharacterById(charId);
        setChar({
          name,
          description,
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
          homepage: urls[0].url,
          wiki: urls[1].url,
        });
        setLoading(false);
      })();
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [charId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && char && (
        <>
          <CharCard char={char} />
          <CharDesc comics={comics} desc={char.description} />
        </>
      )}
    </>
  );
};

export default CharInfo;
