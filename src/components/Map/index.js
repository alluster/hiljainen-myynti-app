import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Map from 'pigeon-maps'
import Marker from './marker'
import { getApartments } from '../../contentfulData';


const Mapped = styled(Map)`
    min-width: 100%
    height: 100px;
`;


const Locations = ({history, initialLat, initialLon}) => {
    const [apartments, setData] = useState(null)
    
    useEffect( () => {
         getApartments("apartment", (response) => {
            setData(response);
        })
    }, []);
    
        return (
            <div>
                <Mapped  
                    twoFingerDrag={true}
                    metaWheelZoom={true} 
                    center={[initialLat, initialLon]} 
                    zoom={15} 
                    height="100vh"  >
                {
                    apartments ? apartments.items.map((item, i) => {
                            return (
                                <Marker key={i} anchor={[item.fields.address.lat, item.fields.address.lon]} onClick={() => history.push(`${item.sys.id}`)} />
                            )
                    }) 
                    : null 
                } 
                </Mapped>
            </div>

        )
}
 


export default withRouter(Locations);