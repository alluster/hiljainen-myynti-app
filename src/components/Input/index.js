import React from 'react';
import { H6 } from 'components/Typography';
import styled from 'styled-components';

const InputField = styled.input`
    height: 53px;
    border: 1px solid ${props => props.theme.colors.black}
`;

const Text = styled.span`
`;

const Input = (props) =>
	<div>
		<Text>
			<H6>{props.fieldName}</H6>
		</Text>
		<InputField />
	</div>

export default Input;
