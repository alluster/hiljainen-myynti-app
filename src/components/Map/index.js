import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Map from 'pigeon-maps'
import Marker from './marker'
import { getApartments } from '../../contentfulData';

const Marked = styled(Marker) `
    height: 20px;
    width: 20px;

`;
const Mapped = styled(Map)`
    max-width: 100%

`;

const Locations = ({history}) => {
    const [data, setData] = useState(null)
    useEffect( () => {
         getApartments("apartment", (response) => {
            setData(response)
        })
    }, []);
        return (
            <Mapped  center={[60.192059, 24.945831]} zoom={12}  height={400}>
                {
                    data ? data.items.map((item, i) => {
                            console.log(item)
                            return (
                                <Marker key={i} anchor={[item.fields.address.lat, item.fields.address.lon]} onClick={() => history.push(`${item.sys.id}`)} />
                            )
                    }) 
                    : null 
                }  
            </Mapped>
        )
}
 


export default withRouter(Locations);