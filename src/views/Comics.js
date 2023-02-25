import css from './Comics.module.css';
import ContainerStyled from 'components/Container/Container.styled';
import avengers from '../img/Avengers.png';
import logo from '../img/Avengers_logo.png';
import comics from '../img/UW.png';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const Comics = () => {
  return (
    <>
      <ContainerStyled>
        <div className={css.banner}>
          <img src={avengers} className={css.avengers} alt="avengers heroes" />
          <h1 className={css.title}>New comics every week! Stay tuned!</h1>
          <img src={logo} className={css.logo} alt="avengers logo" />
        </div>
      </ContainerStyled>

      <section style={{ padding: '45px 0 50px' }}>
        <ContainerStyled>
          <ul className={css.list}>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
            <li className={css.item}>
              <Link to={routes.COMICS_ID}>
                <img className={css.img} src={comics} alt="" />
                <h2 className={css.subtitle}>Name of comics</h2>
                <p className={css.price}>9,99 $</p>
              </Link>
            </li>
          </ul>
          <HeroBtn
            style={{
              display: 'block',
              width: '170px',
              margin: '45px auto 0',
            }}
          >
            <BtnInner>Load more</BtnInner>
          </HeroBtn>
        </ContainerStyled>
      </section>
    </>
  );
};

export default Comics;
