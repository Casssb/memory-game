import React from 'react';
import styled from 'styled-components';

const ScoreboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Scoreboard = (props) => {
  const { score, round } = props;
  return (
    <ScoreboardContainer>
      <p>Round: {round}</p>
      <p>Score: {score.score}</p>
      <p>High Score: {score.highScore}</p>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
