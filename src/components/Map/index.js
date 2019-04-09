import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Map from 'pigeon-maps'
import Marker from './marker'
import { getApartments } from '../../contentfulData';


const Mapped = styled(Map)`
    min-width: 100%
`;
const Container = styled.div`
    height: 100Vh;
`;

const Locations = ({history, initialLat, initialLon}) => {
    const [apartments, setData] = useState(null)
    
    useEffect( () => {
         getApartments("apartment", (response) => {
            setData(response);
        })
    }, []);
    
        return (
            <Container>
                <Mapped  
                    twoFingerDrag={true}
                    metaWheelZoom={true} 
                    defaultHeight={true}
                    center={[initialLat, initialLon]} 
                    zoom={15} 
                      >
                {
                    apartments ? apartments.items.map((item, i) => {
                            return (
                                <Marker key={i} anchor={[item.fields.address.lat, item.fields.address.lon]} onClick={() => history.push(`${item.sys.id}`)} />
                            )
                    }) 
                    : null 
                } 
                </Mapped>
            </Container>

        )
}
 


export default withRouter(Locations);