import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import { H6, H5, H4, H3 } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'components/Nav';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { withRouter } from 'react-router';
import { getApartment } from '../contentfulData';

const Info = styled.div`
    margin-top: 30px;
`;
const  Image = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    `;
const  ImageBox = styled.div`
    height: 300px;
    width: 100%;
`;
const ImageContainer = ({image, alt}) => 
        <ImageBox>
            <Image src={image} alt={alt}/>
        </ImageBox>;
    
const InfoBlock = ({value_1, value_2}) => 
    <Info>
        <H6 lineHeight="0.5rem" small bold>{value_1}</H6>
        <H4  thin>{value_2}</H4>
    </Info>;

const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
`

const Item = (props) => {
    const [data, setData] = useState(null)
    const [addressFromItem, setAddress] = useState("kalevankatu")
    useEffect( () => {
         getApartment(props.match.params.id, (response) => {
            setData(response)
            setAddress(response.fields.streetAddress)
            localStorage.setItem('address', response.fields.streetAddress);
        })
    }, []);

    

    return (
        <div>
        <Nav transparent/>  
        <Header >
 {       console.log(addressFromItem)
}
            <Row>
                <Col xs={2} >
                    <Icon icon="chevron-left" onClick={ () => props.history.goBack()}/>
                </Col>  
            </Row>
            <Row>
            <Col xs={12} sm={12} md={12} lg={6} >   
                    { data ? <H5>{data.fields.streetAddress}</H5> : null}  
                    { data ? <H5 thin lineHeight="0.5rem">{data.fields.district}</H5> : null}  
                </Col>  
                <Col xs={12} sm={12} md={12} lg={6} >   
                    { data ? <H5 >{data.fields.approxPrice}</H5> : null}  
                    { data ? <H5  thin lineHeight="0.5rem">{data.fields.squareMeters}</H5> : null}  
                </Col> 
            </Row>
          
        </Header>
        <Container>
        <Row>
        <Col xs={12} sm={6} md={6} lg={6} >   
                { data ? <InfoBlock value_1="Rakennusvuosi" value_2={data.fields.buildYear} /> : null}  
                { data ? <InfoBlock value_1="Pinta-ala" value_2={data.fields.squareMeters} /> : null}  
                { data ? <InfoBlock value_1="Kerros" value_2={data.fields.floor} /> : null}  
                </Col>

                <Col xs={12} sm={6} md={6} lg={6} >   

                { data ? <InfoBlock value_1="Omistaja" value_2={data.fields.ownerName} /> : null}  
                { data ? <InfoBlock value_1="Omistajan email" value_2={data.fields.ownerEmail} /> : null}  
                { data ? <InfoBlock value_1="Omistajan puhelinnumero" value_2={data.fields.ownerPhone} /> : null}  

            </Col>
            <Col xs={12} sm={12} md={12} lg={12} >   
                { data ? <ImageContainer image={data.fields.images[0].fields.file.url} alt="house"/> : null}  
            </Col>
        </Row>

        </Container>
        <Footer />
	</div>
      
    )
}


export default withRouter(Item);