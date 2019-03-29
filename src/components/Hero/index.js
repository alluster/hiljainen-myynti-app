import React, { Component } from 'react';
import styled from 'styled-components';
import Form from '../Form';

const Container = styled.div`

`;
const Overlay = styled.div`
	background-color: white;
	opacity: 0.5;
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
`;
const ContentBlock = styled.div`
	padding: 20px;
	max-width: 90%;
	margin-left: auto;
	margin-right: auto;
	position: relative
	margin-top: 10%;
	text-align: center;
	z-index: 2;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		margin: auto;
		top: 0%;
		transform: translate(-0%, 0%);
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	object-fit: cover;
	margin: 0px;
	padding: 0px;
	z-index: -1;
	box-sizing: border-box;
`;

class Hero extends Component {
  render() {
	return (
		<Container>
			<Image src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
			<ContentBlock >
				<Form />
			</ContentBlock>
			<Overlay />
		</Container>
	)
  }
};

export default Hero;
