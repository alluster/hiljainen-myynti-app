import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { H5 } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Row, Col } from 'react-styled-flexboxgrid';
import { Button } from 'components/Button';

const AccordionContainer = styled.div `
	background-color: white;
	z-index: 100000;
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 8px;
    margin-top: 30px;
    ${props => {
		if (props.open) return css`
			height: auto;
		`;
	}};
	
    `;
    
const AccordionContent = styled.div `
	background-color: white;
	display: none;
	${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
	`;


const Content = styled(Row)`
    width: 100%;
`;

const Accordion = ({props, data}) => {
    const [toggle, setToggle]  = useState(false)
  	return (
		<AccordionContainer onClick={ () => setToggle(!toggle)} open={toggle}>
        <Content>
            <Col xs={5}>
                { data ? <H5>{data.fields.streetAddress}</H5> : null }
            </Col>
            <Col xs={5}>
            { data ? <H5 right>{data.fields.district}</H5> : null }
            </Col>
            <Col xs={2}>
            <H5 right>
            <FontAwesomeIcon icon="chevron-up" />

            </H5>

            </Col>
        </Content>
        
            <AccordionContent open={toggle}>
            <Content>
            <Col md={5}>
                <Link to={ data ? data.sys.id : null}>{ data ? <Button primary small>Siirry myyntikohteelle</Button> : null }</Link>
            </Col>
            <Col md={5}>
                <H5 thin></H5>
            </Col>
            
        </Content>
            </AccordionContent>
			
		</AccordionContainer>

  )
}


  
export default Accordion;
