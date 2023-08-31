import { styled } from "styled-components";

const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	width: 150px;
	height: 60px;
	background-color: #fff;
	color: #000;
	cursor: pointer;
`;

function Button({children, action}) {
	return (
		<Holder onClick={action}>
			{children}
		</Holder>
	);
}

export default Button;