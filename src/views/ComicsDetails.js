import poster from '../img/x-men.png';
import { Link } from 'react-router-dom';
import css from './ComicsDetails.module.css';
import ContainerStyled from 'components/Container/Container.styled';

const ComicsDetails = () => {
  return (
    <ContainerStyled>
      <div className={css.card}>
        <img className={css.img} src={poster} alt="" />
        <div className={css.content}>
          <h2 className={css.title}>X-Men: Days of Future Past</h2>
          <p className={css.desc}>
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </p>
          <p className={css.pages}>144 pages</p>
          <p className={css.lang}>Language: en-us</p>
          <p className={css.price}>9.99$</p>
        </div>
        <Link to="" className={css.button}>
          Back to all
        </Link>
      </div>
    </ContainerStyled>
  );
};

export default ComicsDetails;
