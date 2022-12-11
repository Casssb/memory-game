/* function which is to take the number of required cards (based on the round) and an array of the available 
  card objects. It will return an array which will be passed to state via setCards() (during a useEffect call which tracks
    the state variable 'round')*/

const createCardsArray = (allCards, requiredCards) => {
  const newArr = [];
  let counter = 0;
  while (counter < requiredCards) {
    const random = Math.floor(Math.random() * allCards.length);
    if (newArr.indexOf(allCards[random]) === -1) {
      newArr.push(allCards[random]);
      counter += 1;
    }
  }
  return newArr;
};

/* shuffle function using the Durstenfield shuffle */
const shuffleArray = (cards) => {
  const temp = [...cards];
  for (let i = temp.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[random]] = [temp[random], temp[i]];
  }
  return temp;
};

const returnRequiredCards = (level) => {
  switch (level) {
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
      return 12;
    case 4:
      return 24;
    case 5:
      return 48;
  }
};

const resetClickedStatus = (cardList) => {
  for (const card of cardList) {
    card.clicked = false;
  }
};

const cacheImage = (card) => {
  return new Promise((resolve, reject) => {
    const imgToLoad = new Image();
    imgToLoad.src = card.image;
    imgToLoad.onload = () => resolve(imgToLoad);
    imgToLoad.onerror = (error) => reject(error);
  });
};

export {
  createCardsArray,
  shuffleArray,
  returnRequiredCards,
  cacheImage,
  resetClickedStatus,
};
