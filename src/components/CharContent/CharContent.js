import CharContentStyled from './CharContentStyled';
import ContainerStyled from 'components/Container/Container.styled';
import CharList from 'components/CharList/CharList';
import CharInfo from 'components/CharInfo/CharInfo';

const CharContent = () => {
  return (
    <section>
      <ContainerStyled>
        <CharContentStyled>
          <CharList />
          <CharInfo />
        </CharContentStyled>
      </ContainerStyled>
    </section>
  );
};

export default CharContent;
