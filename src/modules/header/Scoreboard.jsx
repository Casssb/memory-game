import React from 'react';
import styled from 'styled-components';

const ScoreboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #fff;
`;

const StyledSpan = styled.span`
  color: #03DAC5;
  font-size: 1.4rem;
`

const Scoreboard = (props) => {
  const { score, level } = props;
  return (
    <ScoreboardContainer>
      <p>Level <StyledSpan>{level}</StyledSpan></p>
      <p>Score <StyledSpan>{score.score}</StyledSpan></p>
      <p>High Score <StyledSpan>{score.highScore}</StyledSpan></p>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
