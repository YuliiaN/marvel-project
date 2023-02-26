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
        <div className="char-content grid gap-x-[1.563rem] items-start mt-[3.125rem]">
          <CharList onCharSelected={onCharSelected} />
          <div className="p-[1.563rem] shadow-2xl">
            {charId ? <CharInfo charId={charId} /> : <Skeleton />}
          </div>
        </div>
      </ContainerStyled>
    </section>
  );
};

export default CharContent;
