import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Locations from 'components/Map';
import { Button } from 'components/Button';
import { Row, Col } from 'react-flexbox-grid';

const Input = styled.input`
		padding-top: 10px;
		padding-bottom: 10px; 
		width: 100%;
		font-size: 20px;
		color: ${props => props.theme.colors.black};
		
`;
const Form = styled.form`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const SearchButton = styled(Button)`
	min-width: 100%
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none;
	}
`
const Haku = ({ history }) => {
	const initialAddress = "Maneesikatu";
	const [address, setAddress] = useState(initialAddress);
	const [lat, setLat] = useState(null)
	const [lon, setLon] = useState(null)
	useEffect( () => {
			getCoordinates(localStorage.getItem('address'))
   }, []);

	async function handleForm (evt) {
		evt.preventDefault();
		evt.target.blur()

		try { 
			setAddress({address: localStorage.getItem('address')})
			setAddress(address);
			getCoordinates(address)
			setAddress(initialAddress);

		} 
		catch (err) {
				if(err) {
					console.log("error")
				}
		}	
	}
	console.log(localStorage.getItem('address'))

	async function getCoordinates(address) {
		try {
			const response = await fetch(
				`https://api.opencagedata.com/geocode/v1/json?key=46b73de711e247f8877b790c5c2f2b56&q=${address}&pretty=1`,
		
		  	);
		  const data = await response.json();
		  setLat(data.results[0].geometry.lat);
		  setLon(data.results[0].geometry.lng);

		} 
		catch (err) {
		  if (err.name !== "AbortError") {
		  }

		}

	  }
		
	
	return (
		<div>
			<Nav transparent/>  
				<Container>
					<Form action="" onSubmit={handleForm}>
						<Row>
							<Col xs={12} sm={12} md={12} lg={6} >
								<Input placeholder="Hae" type="text"  onChange={ e => setAddress(e.target.value) }/>
							</Col>
							<Col mdOffset={2} lgOffset={2} xs={12} sm={12} md={12} lg={4} >
								<SearchButton type="submit" primary>Hae</SearchButton>
							</Col>
						</Row>
					</Form>
				</Container>
				
			<Container>
				<Locations initialLat={lat} initialLon={lon} history={history}/>
			</Container>
			<Footer />
		</div>
	);
};

      
export default Haku;