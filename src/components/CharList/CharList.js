import CharListStyled from './CharList.styled';
import CharItem from 'components/CharItem/CharItem';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';

const CharList = () => {
  return (
    <div>
      <CharListStyled>
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
      </CharListStyled>
      <HeroBtn
        style={{
          display: 'block',
          width: '170px',
          margin: '45px auto 0',
        }}
      >
        <BtnInner>Load more</BtnInner>
      </HeroBtn>
    </div>
  );
};

export default CharList;
