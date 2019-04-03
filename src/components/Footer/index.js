import React from 'react';
import styled from 'styled-components';
import { H6, H5 } from 'components/Typography';
import Container from 'components/Container';

const Content = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    bottom: -300px;
    width: 100%;
    height: 400px;
    margin-top: 100vh;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
       height: 600px;

    }
`;

const TextContainer = styled.div`
    padding: 10px;
    text-align: center;
    padding-bottom: 40px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        text-align: center;
        transform: translate(0%, 0%);
        height: 100%;
        padding: 10px;
    }
`;

const Logo = styled(H6) `
    margin-top: 300px;
    text-align: center;
    `;

const SiteBottom = styled.div`
    min-width: 100%;
    height: 40px;
    margin-top: calc(100% - 40px)
    z-index: 1000;
    position: absolute;
    background-color: ${props => props.theme.colors.darkPrimary}
`;


const Footer = () =>
    <div>
        <Content>
            <Container>
                    <TextContainer >
                        <H5 light bold>Löydä asiakkaallesi paras asunto - hiljaisilta markkinoilta</H5>
                        <Logo bold light>Hiljainenmyynti.fi</Logo>
                    </TextContainer>
            </Container>
        </Content>
        <SiteBottom />
    </div>;

export default Footer;
