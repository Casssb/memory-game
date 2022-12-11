import styled, { createGlobalStyle } from 'styled-components';
import Header from './modules/Header';
import Cards from './modules/Cards';
import { useEffect, useState } from 'react';
import {
  createCardsArray,
  shuffleArray,
  returnRequiredCards,
  cacheImage,
} from './modules/utils/cardHelpers';
import { addToScore, resetScore } from './modules/utils/gameHelpers';
import cardList from './modules/utils/cardData';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
   }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181616;
  color: white;
  height: 100%;
  min-height: 100vh;
`;

function App() {
  const [level, setLevel] = useState(3);
  const [score, setScore] = useState({ score: 0, highScore: 0 });
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all(cardList.map((card) => cacheImage(card)))
      .then(() => setLoaded(true))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const requiredCards = returnRequiredCards(level);
    const cardsArray = createCardsArray(cardList, requiredCards);
    setCards(cardsArray);
  }, [level]);

  const handleClick = (e) => {
    e.preventDefault();
    const shuffled = shuffleArray(cards);
    setCards(shuffled);
    addToScore(score, setScore);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header score={score} level={level} />
        <Cards cards={cards} handleClick={handleClick} cardsLoaded={loaded} />
      </Wrapper>
    </>
  );
}

export default App;

/*Starting plan;
APP LEVEL- state for cards array (each card will be an object containing an image, name, id and 'has been clicked' status) 
state for game level -- 4 levels; 4 cards, 8 cards, 16 cards, 32 cards (possibly a super hard mode with more cards)
function to create a stateful card array depending on the game level
function to 'shuffle' cards after each click (but keep the same array)
function to check for a win at each level (and reset the game if a card is clicked twice)
depending on load time a function to promisify image loading when the state for a new array loads
logic to display a 'loading...' message while awaiting the async function
logic to update the scoreboard after every click

app>>
header, main, footer
header>>
title, scoreboard
main>>
deck (contains all cards)
card (takes card data and renders component)
footer>>
links? (not sure this really matters may skip the footer entirely)
utils>>
CardData (36 card images and object containing card data)
SortLogic (sorting algo)
*/
