import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';
import CharItem from 'components/CharItem/CharItem';
import { HeroBtn } from 'components/Hero/Hero.styled';
import Loader from 'components/Loader/Loader';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    fetchAllCharacters(0);
  }, []);

  useEffect(() => {
    fetchAllCharacters(offset);
  }, [offset]);

  async function fetchAllCharacters(offset) {
    try {
      const res = await api.getAllCharacters(offset);
      setCharacters([...characters, ...res]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  const handleClick = () => {
    setOffset(prevState => (prevState += 9));
  };

  return (
    <>
      {loading && <Loader />}
      {!!characters.length && (
        <div styles={{ height: '100%' }}>
          <ul className="char-list grid gap-x-[1.563rem] gap-y-[1.875rem]">
            {characters.map(({ id, name, thumbnail }) => (
              <CharItem
                key={nanoid()}
                id={id}
                name={name}
                thumbnail={thumbnail}
                handleClick={onCharSelected}
              />
            ))}
          </ul>
          <HeroBtn
            className="btn long mx-auto mb-0 mt-[2.813rem]"
            onClick={handleClick}
          >
            <div className="inner">Load more</div>
          </HeroBtn>
        </div>
      )}
    </>
  );
};

export default CharList;
