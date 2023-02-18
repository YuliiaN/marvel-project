import styled from '@emotion/styled';
import hero from '../../img/abyss.jpg';

export const CharItemStyled = styled.li`
  width: 200px;
  height: 318px;
  background-color: #232222;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.3s transform;

  &.selected {
    box-shadow: 0 5px 20px #9f0013;
    transform: translateY(-8px);
  }
`;

export const CharItemImageStyled = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 18px;
`;

CharItemImageStyled.defaultProps = {
  src: `${hero}`,
  alt: 'picture of hero',
};

export const CharItemTitleStyled = styled.h2`
  margin-left: 18px;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.18;
  text-transform: uppercase;
  color: #fff;
`;
