import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import { H5, H6 } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const MobileNav = styled.div `
	background-color: white;
	z-index: 100000;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	text-align: center;
	@media (min-width: ${props => props.theme.screenSize.laptop}) {
		display: none
	};
	${props => {
		if (props.open) return css`
			background-color: white;
		`;
		return css`
			display: none;
		`;
	}};
	`;

const Navigation = styled.div`
	${props => {
		if (props.transparent) return css`
			background-color: transparent;
		`;
		return css`
			background-color: white;
		`;
	}};
	${props => {
		if (props.open) return css`
			display: none;
		`;
	}};
	top; 0;
	padding: 20px;
	margin-top: 0px !mportant;
	height: 50px;
	z-index: 1000;
`;

const NavLinkContainer = styled(Col)`
	@media (max-width: ${props => props.theme.screenSize.laptop}) {
		display: none
	  `;
	  
const NavLink = styled(H5)`
	line-height:20px;
	font-size: 16px;
	@media (max-width: ${props => props.theme.screenSize.laptop}) {
		display: none
	`;

const NavLinkMobile = styled(H6)`
	line-height:20px;
	font-size: 20px;
	`;

const IconContainer = styled(FontAwesomeIcon)`
	display: none
	padding: 18px 0px 20px 0px;
	font-size: 30px !important;
	margin-left: 80%;
	margin-right: auto;
	
	@media (max-width: ${props => props.theme.screenSize.laptop}) {
		display: block
	};
	`;

const Hamburger = styled(Col)`
	`;

const Logo = styled(H5)`
	line-height:20px;

	`;

const Nav = ({ transparent }) => {
	const [toggle, setToggle]  = useState(false)
  	return (
		<div>
			<MobileNav open={toggle}>
				<Row>
					<Col xs={12} open={toggle}>
						<IconContainer icon="times" onClick={ () => setToggle(!toggle)}/>
					</Col>
					<Col onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="ostotoimeksianto">
							<NavLinkMobile>Ostotoimeksianto </NavLinkMobile>
						</Link>
					</Col>
					<Col onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="haku">
							<NavLinkMobile>Haku</NavLinkMobile>
						</Link>
					</Col>
					<Col onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="omat-toimeksiannot">
							<NavLinkMobile>Omat toimeksiannot</NavLinkMobile>
						</Link>
					</Col>
				</Row>
			</MobileNav>
			<Navigation transparent={transparent} open={toggle}>
				<Row>
					<Col xs={10} sm={10} md={6} >
						<Link to="/" >
							<Logo bold>Hiljainenmyynti</Logo>
						</Link>
					</Col>
					<NavLinkContainer  md={2}>
						<Link to="ostotoimeksianto"><NavLink>Ostotoimeksianto </NavLink></Link>
					</NavLinkContainer>
					<NavLinkContainer  md={2}>
						<Link to="haku"><NavLink>Haku</NavLink></Link>
					</NavLinkContainer>
					<NavLinkContainer  md={2}>
						<Link to="omat-toimeksiannot"><NavLink>Omat toimeksiannot</NavLink></Link>
					</NavLinkContainer>
					<Row end="sm" end="xs" end="md">
						<Hamburger xs={2} sm={2} md={9}  open={toggle}>
							<IconContainer icon="bars" onClick={ () => setToggle(!toggle)}/>
						</Hamburger>
					</Row>
			
				</Row>
			</Navigation>
		</div>

  )
}


  
export default Nav;
