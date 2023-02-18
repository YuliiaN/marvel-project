import styled from '@emotion/styled';
import hero from '../../img/thor.jpeg';
import mjolnir from '../../img/mjolnir.png';

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  height: 250px;
`;

export const HeroStyled = styled.div`
  width: 50%;
  padding: 35px 40px;
  background-color: #fff;

  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeroImage = styled.img`
  width: 180px;
  height: 180px;
`;

HeroImage.defaultProps = {
  src: `${hero}`,
  alt: 'picture of character',
};

export const HeroWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const HeroTitleStyled = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.18;
  text-transform: uppercase;
`;

export const HeroDescStyled = styled.p`
  font-size: 14px;
  line-height: 1.14;
`;

export const HeroBtn = styled.button`
  min-width: 101px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  transition: 0.3s transform;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    height: 10px;
    margin-left: 10px;
    transition: none;
    background-color: #9f0013;
  }
  &::after {
    content: '';
    display: block;
    height: 10px;
    margin-right: 10px;
    transition: none;
    background-color: #9f0013;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &.secondary::before,
  &.secondary::after {
    background-color: #5c5c5c;
  }
`;

HeroBtn.defaultProps = {
  type: 'button',
};

export const BtnInner = styled.div`
  position: relative;
  background-color: #9f0013;
  line-height: 18px;
  padding: 0 18px;
  transition: none;
  &::before {
    border-color: #9f0013 transparent;
    border-style: solid;
    border-width: 0 0 10px 10px;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -10px;
    transition: none;
  }
  &::after {
    border-color: #9f0013 transparent;
    border-style: solid;
    border-width: 0 0 10px 10px;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: -10px;
    transform: rotate(180deg);
    transition: none;
  }

  &.secondary {
    background-color: #5c5c5c;
    &::before {
      border-color: #5c5c5c transparent;
      transition: none;
    }
    &::after {
      border-color: #5c5c5c transparent;
      transition: none;
    }
  }
`;

export const RandomStyled = styled.div`
  width: 50%;
  padding: 35px 40px;
  background-color: #232222;

  background-image: url(${mjolnir});
  background-repeat: no-repeat;
  background-position: bottom 14px right -37px;
  background-size: 202px;
`;

export const RandomText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.16;
  color: #fff;
`;
