import { useEffect, useState } from "react";
import { styled } from "styled-components";


const Holder = styled.div`
	grid-area: 3 / 2 / 4 / 3;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

function CountdownScreen({onEnd}) {
	const [count, setCount] = useState(3);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount(count - 1);
		}, 1000);

		if (count === 0) {
			onEnd();
		}

		return () => {
			clearInterval(timer);
		};
	}, [count]);

	return (
		<Holder>
			<h1>{count}</h1>
		</Holder>
	);
};

export default CountdownScreen;