import ContainerStyled from 'components/Container/Container.styled';
import avengers from '../../img/Avengers.png';
import logo from '../../img/Avengers_logo.png';
import css from './Comics.module.css';

const Banner = () => {
  return (
    <ContainerStyled>
      <div className={css.banner}>
        <img src={avengers} className={css.avengers} alt="avengers heroes" />
        <h1 className={css.title}>New comics every week! Stay tuned!</h1>
        <img src={logo} className={css.logo} alt="avengers logo" />
      </div>
    </ContainerStyled>
  );
};

export default Banner;
