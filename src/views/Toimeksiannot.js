import React, { useState, useEffect } from 'react';
import { H1 } from 'components/Typography';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Accordion from 'components/Accordion';
import { getApartments } from '../contentfulData';

const Toimeksiannot = () => {

const [data, setData] = useState(null)
	useEffect( () => {
		getApartments("apartment", (response) => {
			setData(response)
		})
	}, []);
	return (
		<div>
			<Nav transparent/>  
			<Container>
				<H1>Kaikki kohteet</H1>
				{
					data ? data.items.map((item, i) => {
							console.log(item)
							return (
								<Accordion key={i} data={item}></Accordion>
							)
					}) 
					: null 
				}  					
			</Container>
			<Footer />
		</div>
	)
}
	
export default Toimeksiannot;
