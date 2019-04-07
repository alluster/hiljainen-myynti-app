import React from 'react';
import { H1, H3, H4, H6 } from 'components/Typography';
import {Button} from 'components/Button';
import styled from 'styled-components';

import { Register, Login } from '../../keycloak';



const Container = styled.div`

`;

const InputHero = styled.input `
  border: none;
  border-radius: 30px;
  padding: 5px;
  text-align: center;
  height: 30px;
  font-size: 16px;
  width: 90%;
  max-width: 400px;
  color: ${props => props.theme.colors.black};
  margin-bottom: 30px;
  display: block;
  opacity: 0.8;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

`;

const Form = () =>
<div>
  <Container>
    <H1>Löydä hiljaiset myyntikohteet</H1>
    <H3>Asunnonvälittäjän työkalu hiljaisten myyntikohteiden löytämiseen</H3>

    {/* <InputHero  fieldName="Email address" placeholder="Anna sähköpostiosoitteesi" /> */}
    <Button primary onClick={() => Register()}>Rekisteröidy</Button>
    <H6>Tai</H6>
    <H6 bold underline secondary onClick={() => Login()}>Kirjaudu sisään</H6>

  </Container>


</div>
  

export default Form;
