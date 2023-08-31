import { styled } from "styled-components";
import Button from "../utils/Button";

const Holder = styled.div`
	grid-area: 3 / 2 / 5 / 3;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const SliderHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

function LandingScreen({ onStart, reps, setReps, delay, setDelay }) {


	return (
		<Holder>
			<h2>SetUp</h2>
			<SliderHolder>
				<h3>Reps</h3>
				<p>{reps} Reps</p>
				<input type="range" min="1" max="50" step="1" value={reps} onChange={(e)=>setReps(e.target.value)} />
			</SliderHolder>
			<SliderHolder>
				<h3>Delay</h3>
				<p>{delay} seconds</p>
				<input type="range" min="2" max="30" step="1" value={delay} onChange={(e)=>setDelay(e.target.value)} />
			</SliderHolder>
			<Button action={onStart}>Start</Button>
		</Holder>
	);
}

export default LandingScreen;