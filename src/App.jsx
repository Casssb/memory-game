import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100vh;
  font-size: 4rem;
  font-weight: 700;
`;

function App() {
  return <Wrapper>test</Wrapper>;
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
