import React from 'react';
import { H1 } from 'components/Typography';
import Nav from 'components/Nav';
import Container from 'components/Container';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Header from 'components/Header';
import Locations from 'components/Map';
import { Button } from 'components/Button';
import { Row, Col } from 'react-flexbox-grid';
import hideVirtualKeyboard from 'hide-virtual-keyboard';


const Form = styled.form`
	margin-top: 20px;
	margin-bottom: 20px;
	position: absolute;
	z-index: 10000;
	width: 80%;
`;

const Input = styled.input`
	padding-top: 10px;
	padding-bottom: 10px; 
	width: calc(100% - 20px);
	margin-bottom: 50px;
	border: none;
	font-size: 20px;
	padding-left: 20px;
	color: ${props => props.theme.colors.black};
		
`;


const Ostotoimeksianto = () => 
	<div>
			<Nav transparent/>  
			<Container>
				<H1>Luo uusi ostotoimeksianto</H1>
				<Form action="" >
						<Row>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Toimeksiantajan nimi" 
									type="text"  
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Puhelinnumero" 
									type="text"  
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Toimeksiannon summa" 
									type="text"  
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Toivottu asuinalue" 
									type="text"  
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Muu tieto" 
									type="text"  
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input 
									placeholder="Muu tieto" 
									type="text"  
								/>
							</Col>
							<Col  
								xs={12} sm={12}
								md={12} lg={4} 
								>
								<Button
									type="submit" 
									primary
								>

									Luo toimeksianto
								</Button>
								</Col>
								<Col  
								xs={12} sm={12}
								md={12} lg={4} 
								>
								<Button
									type="submit" 
									secondary
								>
									Tulosta toimeksianto
								</Button>
							</Col>
						</Row>
					</Form>
			</Container>
      <Footer />
	</div>
      
export default Ostotoimeksianto;
