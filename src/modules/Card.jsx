import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const CardWrapper = styled.div`
  display: flex;
  flex: 1 0 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.2rem;
  background-color: black;

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  padding: 0.4rem;

  & img {
    width: 8rem;
    height: 10rem;
  }
`;

const Card = (props) => {
  const { cardImage, cardName, handleClick } = props;
  return (
    <Tilt
      glareEnable={true}
      glareColor={'#ffff'}
      glareMaxOpacity={0.5}
      scale={1.02}
    >
      <CardWrapper onClick={(e) => handleClick(e)}>
        <ImageWrapper>
          <img src={cardImage} alt={cardName} />
        </ImageWrapper>
        <p>{cardName}</p>
      </CardWrapper>
    </Tilt>
  );
};

export default Card;
