import React, { useState } from 'react';
import { styled } from 'styled-components';
import LandingScreen from './screens/LandingScreen';
import TrainingScreen from './screens/TrainingScreen';
import CountdownScreen from './screens/CountdownScreen';

const PageHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #32a864;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 300px 1fr;
  grid-template-rows: 1fr 50px 450px 50px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  font-family: 'Roboto', sans-serif;
  grid-row-gap: 20px; 
`;

const TitleHolder = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 1px #333;
`;

function App() {
  const [state, setState] = useState("LandingScreen")
  const [reps, setReps] = useState(10);
  const [delay, setDelay] = useState(10);

  const onStart = () => {
    setState("Countdown");
  }

  const onCountdownEnd = () => {
    setState("Running");
  }

  return (
    <PageHolder>
      <TitleHolder>
        <Title>Middle Block Reaction Trainer</Title>
      </TitleHolder>
      {state === "LandingScreen" && <LandingScreen onStart={onStart} reps={reps} setReps={setReps} delay={delay} setDelay={setDelay} />}
      {state === "Countdown" && <CountdownScreen onEnd={onCountdownEnd} />}
      {state === "Running" && <TrainingScreen reps={reps} delay={delay} state={state} setState={setState} />}
    </PageHolder>
  );
}

export default App;
