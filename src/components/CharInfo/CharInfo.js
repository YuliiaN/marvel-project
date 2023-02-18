import CharInfoStyled from './CharInfo.styled';
import CharCard from './CharCard/CharCard';
import CharDesc from './CharDesc/CharDesc';

const CharInfo = () => {
  return (
    <CharInfoStyled>
      <CharCard />
      <CharDesc />
    </CharInfoStyled>
  );
};

export default CharInfo;
