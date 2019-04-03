import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
   margin-left: auto;
   margin-right: auto;
   max-width: 900px;
   padding-left: 10px;
   padding-right: 10px;
    @media (max-width: ${props => props.theme.screenSize.laptop}) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const Container = ({ children, className }) =>
        <Content className={className}>
            {children}
        </Content>

export default Container;
