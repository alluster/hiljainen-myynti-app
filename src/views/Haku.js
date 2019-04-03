import React, { useState, useEffect } from 'react';
import { H5 } from 'components/Typography';
import Nav from 'components/Nav';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Locations from 'components/Map';


const Haku = ({history}) => {

	return (
		<div>
		<Nav transparent/>  
			<Header >
				<H5>Haku</H5>
			</Header>
			<Container>
				<Locations  history={history}/>
			</Container>
			<Footer />
		</div>
	);
};

      
export default Haku;