import React from 'react';
import styled from 'styled-components';
import sign from '../../assets/southpark-sign.png';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 4rem;
`;

const Title = () => {
  return (
    <TitleContainer>
      <ImageContainer>
        <img src={sign} alt="southpark sign" />
      </ImageContainer>
      <h1>Memory Game</h1>
    </TitleContainer>
  );
};

export default Title;
