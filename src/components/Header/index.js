import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';


const HeaderBlock = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;

const Content = styled(Container)`
    color: ${props => props.theme.colors.white};
`;



const Header = ({children}) => {
	return (

		<HeaderBlock>
            <Content>
                {children}
            </Content>
        </HeaderBlock>
	);
};
export default Header;