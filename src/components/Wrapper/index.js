import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;

`;

const Content = styled.div`

    padding: 0px;
    padding-bottom: 0px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        padding: 10px;
        padding-bottom: 0px;
    }
`;
const Wrapper = ({ children, className }) =>
    <Container className={className}>
        <Content>
            {children}
        </Content>
    </Container>;

export default Wrapper;
