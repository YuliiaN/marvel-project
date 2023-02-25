import CharContentStyled from './CharContentStyled';
import ContainerStyled from 'components/Container/Container.styled';
import CharList from 'components/CharList/CharList';
import CharInfo from 'components/CharInfo/CharInfo';
import { useState } from 'react';
import Skeleton from 'components/Skeleton/Skeleton';
import CharInfoStyled from 'components/CharInfo/CharInfo.styled';

const CharContent = () => {
  const [charId, setCharId] = useState(null);

  const onCharSelected = id => {
    setCharId(id);
  };

  return (
    <section>
      <ContainerStyled>
        <CharContentStyled>
          <CharList onCharSelected={onCharSelected} />
          <CharInfoStyled>
            {charId ? <CharInfo charId={charId} /> : <Skeleton />}
          </CharInfoStyled>
        </CharContentStyled>
      </ContainerStyled>
    </section>
  );
};

export default CharContent;
