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
const shuffleArray = (cards) => {
  const shuffled = cards;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[1] = shuffled[random];
    shuffled[random] = temp;
  }
  return shuffled;
};

export { createCardsArray, shuffleArray };
