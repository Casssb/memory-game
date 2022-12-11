const addToScore = (score, setScore) => {
  if (score.score + 1 > score.highScore) {
    setScore((prev) => ({
      score: prev.score + 1,
      highScore: prev.highScore + 1,
    }));
  } else {
    setScore((prev) => ({
      ...prev,
      score: prev.score + 1,
    }));
  }
};

const resetScore = (setScore) => {
  setScore((prev) => ({
    ...prev,
    score: 0,
  }));
};


export { addToScore, resetScore };
