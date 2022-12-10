import styled from 'styled-components';
import Header from './modules/Header';
import Cards from './modules/Cards';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100vh;
`;

function App() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState({ score: 0, highScore: 0 });
  const [cards, setCards] = useState([]);

  const addToScore = () => {
    if (score.score + 1 > score.highScore) {
      setScore((prev) => {
        ({
          score: prev.score + 1,
          highScore: prev.highScore + 1,
        });
      });
    } else {
      setScore((prev) => {
        ({
          ...prev,
          score: prev.score + 1,
        });
      });
    }
  };

  const resetScore = () => {
    setScore((prev) => {
      ({
        ...prev,
        score: 0,
      });
    });
  };

  /* function which is to take the number of required cards (based on the round) and an array of the available 
  card objects. It will return an array which will be passed to state via setCards() (during a useEffect call which tracks
    the state variable 'round')*/

  const createCardsArray = (allCards, requiredCards) => {
    const newArr = [];
    for (let i = 0; i < requiredCards.length; i++) {
      const random = Math.floor(Math.random() * allCards.length);
      if (newArr.indexOf(allCards[random]) === -1) {
        newArr.push(allCards[random]);
        i += 1;
      }
    }
    return newArr;
  };

    /* shuffle function using the Durstenfield shuffle */
  const shuffleArray = () => {
    const current = [...cards];
    for (let i = current.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      const temp = current[i];
      current[1] = current[random];
      current[random] = temp;
    }
  };

  const handleClick = () => {
    /* if card is clicked for the second time -- function to reset round, score and cards
    addToScore()
    function to check if game is over (all 4 rounds have been completed)
    function to check if round is complete (a filter that checks all cards in current state array and if all have
      been clicked then round is increased and new (larger )array is added) */
  };

  return (
    <Wrapper>
      <Header score={score} round={round} />
      <Cards />
    </Wrapper>
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
