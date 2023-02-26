import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import CharListStyled from './CharList.styled';
import CharItem from 'components/CharItem/CharItem';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import { api } from 'components/Hero/Hero';
import Loader from 'components/Loader/Loader';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  useEffect(() => {
    fetchAllCharacters(offset);
  }, [offset]);

  async function fetchAllCharacters(offset) {
    try {
      const res = await api.getAllCharacters(offset);
      setCharacters(prevData => [...prevData, ...res]);
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
          <CharListStyled>
            {characters.map(({ id, name, thumbnail }) => (
              <CharItem
                key={nanoid()}
                id={id}
                name={name}
                thumbnail={thumbnail}
                // getDetails={getCharacterDetails}
                handleClick={onCharSelected}
              />
            ))}
          </CharListStyled>
          <HeroBtn
            style={{
              display: 'block',
              width: '170px',
              margin: '45px auto 0',
            }}
            onClick={handleClick}
          >
            <BtnInner>Load more</BtnInner>
          </HeroBtn>
        </div>
      )}
    </>
  );
};

export default CharList;
