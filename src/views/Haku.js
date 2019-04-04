import React, { useState, useEffect } from 'react';
import Nav from 'components/Nav';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Locations from 'components/Map';
import { Button } from 'components/Button';

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
			<Header >
				<form action="" onSubmit={handleForm}>
					<input placeholder="Hae" type="text"  onChange={ e => setAddress(e.target.value) }/>
					<Button  type="submit" primary>Hae</Button>
				</form>
			</Header>
			<Container>
				<Locations initialLat={lat} initialLon={lon} history={history}/>
			</Container>
			<Footer />
		</div>
	);
};

      
export default Haku;