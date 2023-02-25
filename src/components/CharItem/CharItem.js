import {
  CharItemStyled,
  CharItemImageStyled,
  CharItemTitleStyled,
} from './CharItem.styled';

const CharItem = ({ id, name, thumbnail, handleClick }) => {
  return (
    <CharItemStyled
      id={id}
      onClick={() => {
        handleClick(id);
      }}
    >
      <CharItemImageStyled
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <CharItemTitleStyled>{name}</CharItemTitleStyled>
    </CharItemStyled>
  );
};

export default CharItem;
