import css from './Comics.module.css';
import ContainerStyled from 'components/Container/Container.styled';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllComics(offset);
  }, []);

  useEffect(() => {
    fetchAllComics(offset);
  }, [offset]);

  async function fetchAllComics(offset) {
    try {
      const res = await api.getAllComics(offset);
      setComics(prevData => (prevData.length ? [...comics, ...res] : [...res]));
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
                <li key={nanoid()} className={css.item}>
                  <Link
                    to={`/${routes.COMICS}/${id}`}
                    state={{ from: location }}
                  >
                    <img
                      className={css.img}
                      src={`${thumbnail.path}.${thumbnail.extension}`}
                      alt={title}
                    />
                    <h2 className={css.subtitle}>{title}</h2>
                    <p className={css.price}>
                      {prices[0].price
                        ? `${prices[0].price}$`
                        : 'not available'}
                    </p>
                  </Link>
                </li>
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
