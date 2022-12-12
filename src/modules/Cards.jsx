import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import StartMessage from './StartMessage';
import WinnerMessage from './EndMessage';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 4rem;

  @media screen and (max-width: 640px) {
    padding: 2rem;
  }
`;

const Cards = (props) => {
  const { cards, handleClick, cardsLoaded, status, handleButtonClick } = props;

  return (
    <StyledMain>
      {!cardsLoaded && <h1>Loading...</h1>}

      {cardsLoaded && status === 'start' && (
        <StartMessage handleButtonClick={handleButtonClick} status={status} />
      )}

      {cardsLoaded && status === 'winner' && (
        <WinnerMessage handleButtonClick={handleButtonClick} status={status} />
      )}

      {cardsLoaded &&
        status === 'playing' &&
        cards.map((card) => (
          <Card
            cardImage={card.image}
            cardName={card.name}
            handleClick={handleClick}
            key={card.name}
          />
        ))}
    </StyledMain>
  );
};

export default Cards;
