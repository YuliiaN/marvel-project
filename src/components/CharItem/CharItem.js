import {
  CharItemStyled,
  CharItemImageStyled,
  CharItemTitleStyled,
} from './CharItem.styled';

const CharItem = () => {
  return (
    <CharItemStyled className="selected">
      <CharItemImageStyled />
      <CharItemTitleStyled>Abyss</CharItemTitleStyled>
    </CharItemStyled>
  );
};

export default CharItem;
