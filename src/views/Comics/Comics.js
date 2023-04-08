import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { api } from 'components/Hero/Hero';
import css from './Comics.module.css';
import ContainerStyled from 'components/Container/Container.styled';
import ComicsPage from './ComicsPage';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import Loader from 'components/Loader/Loader';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllComics(12, offset);
  }, [offset]);

  async function fetchAllComics(limit, offset) {
    try {
      const res = await api.getAllComics(limit, offset);
      setComics(prevComics => {
        return !offset ? res : [...prevComics, ...res];
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  const handleClick = () => {
    setOffset(prevState => prevState + 12);
  };

  return (
    <section style={{ padding: '45px 0 50px' }}>
      <ContainerStyled>
        {loading && <Loader />}
        {!!comics.length && !loading && (
          <>
            <ul className={css.list}>
              {comics.map(({ id, title, thumbnail, prices }) => (
                <ComicsPage
                  key={nanoid()}
                  id={id}
                  title={title}
                  thumbnail={thumbnail}
                  prices={prices}
                  location={location}
                />
              ))}
            </ul>
            <HeroBtn
              style={{
                display: 'block',
                width: '170px',
                margin: '45px auto 0',
              }}
              onClick={handleClick}
            >
              <BtnInner>Load more</BtnInner>
            </HeroBtn>{' '}
          </>
        )}
      </ContainerStyled>
    </section>
  );
};

export default Comics;
