import { styled } from "styled-components";
import Button from "../utils/Button";
import { useEffect, useState } from "react";

const Holder = styled.div`
	grid-area: 3 / 2 / 5 / 3;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const DirectionSymbol = styled.p`
	font-size: 10rem;
	font-weight: bold;
	padding: 0;
	margin: 0;
`

function TrainingScreen({ reps, delay, state, setState, playSound}) {
	const [currentRep, setCurrentRep] = useState(1);
	const [direction, setDirection] = useState(0);
	const directions = ["left", "right", "middle"]

	useEffect(() => {
		if (currentRep <= reps && state === "Running") {
			playSound("beep");
			const soundsTimeout = setTimeout(() => {
				playSound(directions[direction]);
			}, 600)	;

			const timeout = setTimeout(() => {
				const index = Math.floor(Math.random() * 3);
				setDirection(index);
				setCurrentRep(currentRep + 1);
			}, delay * 1000);

			return () => {
				clearTimeout(timeout);
				clearTimeout(soundsTimeout);
			};
		} else {
			setState("LandingScreen");
		}
	}, [currentRep, state]);

	useEffect(() => {
		if (state !== "Running") {
			setCurrentRep(1);
			const index = Math.floor(Math.random() * 3);
			setDirection(index);
		}
	}, [state]);

	return (
		<Holder>
			<h2>{currentRep} / {reps} reps</h2>
			<p>{directions[direction]}</p>
			<DirectionSymbol>
				{direction === 0 ? "⬅️" : ""}
				{direction === 1 ? "➡️" : ""}
				{direction === 2 ? "⏺️" : ""}
			</DirectionSymbol>
			<Button action={() => setState("LandingScreen")}>Stop</Button>
		</Holder>
	);
}

export default TrainingScreen;