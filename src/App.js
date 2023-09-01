import React, { useState } from 'react';
import { styled } from 'styled-components';
import LandingScreen from './screens/LandingScreen';
import TrainingScreen from './screens/TrainingScreen';
import CountdownScreen from './screens/CountdownScreen';

// Work around for ios safari audio
import beepsound from "./sounds/beep.mp3";
import leftsound from "./sounds/left.mp3";
import rightsound from "./sounds/right.mp3";
import middlesound from "./sounds/middle.mp3";

const default_sound = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf"

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

  const sound = new Audio();
  sound.autoplay = true;
  sound.src = default_sound;

  const playSound = (output) => {
    switch (output) {
      case "beep":
        sound.src = beepsound;
        break;
      case "left":
        sound.src = leftsound;
        break;
      case "right":
        sound.src = rightsound;
        break;
      case "middle":
        sound.src = middlesound;
        break;
      default:
        sound.src = default_sound;
    }
  }


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
      {state === "Running" && <TrainingScreen reps={reps} delay={delay} state={state} setState={setState} playSound={playSound} />}
    </PageHolder>
  );
}

export default App;
