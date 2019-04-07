import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { H5 } from 'components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link  from "components/LinkHOC";
import LogoImage from './logo.png'


const StyledRow = styled(Row)`
	margin: 0px 0px 0px 0px !important; 
	transform: translate(-0%, 50%);

`;
const StyledCol = styled(Col)`
	padding: 0px 0px 0px 0px !important; 
	margin-top: 20px;
`;
const MobileNav = styled.div `
	margin-top: auto;
	background-color: white;
	z-index: 100000;
	height: 100%;
	width: 100vw;
	position: absolute;
	top: 0;
	padding: 0px;
	margin:0px;
	text-align: center;
	@media (min-width: ${props => props.theme.screenSize.tablet}) {
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
	if (props.absolute) return css`
		position: absolute !important;
	`;
}};
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
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		height: 20px;
	}
`;

const NavLinkContainer = styled(Col)`
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none
		padding: 0px;
	  `;
	  
const NavLink = styled(H5)`
	font-size: 20px;
	text-align: center;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none
	`;

const NavLinkMobile = styled(H5)`
	line-height:90px;
	padding: 0px;
	:hover {
		cursor: pointer
	}
	`;

const IconContainer = styled(H5)`
	line-height: 20px;
	font-size: 20px !important;
	display: none;
	:hover {
		cursor: pointer
	}
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: block;
		margin-top: 5px;

	};
	`;

const Logo = styled.img`
	width: 150px;
	height: auto;
	margin-top: 20px;
	
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		margin-top: 5px;
	}

`;
const Hamburger = styled(Col)`
	`;

// const Logo = styled(H5)`
// 	line-height:20px;

// 	`;

const Nav = ({ transparent, className }) => {
	const [toggle, setToggle]  = useState(false)
  	return (
		<div className={className} >
			<MobileNav open={toggle}>
				<StyledRow>
					{/* <StyledCol onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="ostotoimeksianto">
							<NavLinkMobile>Ostotoimeksianto </NavLinkMobile>
						</Link>
					</StyledCol> */}
					<StyledCol onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="haku">
							<NavLinkMobile>Haku</NavLinkMobile>
						</Link>
					</StyledCol>
					<StyledCol onClick={ () => setToggle(!toggle)} xs={12}>
						<Link to="omat-toimeksiannot">
							<NavLinkMobile>Omat toimeksiannot</NavLinkMobile>
						</Link>
					</StyledCol>
					<StyledCol onClick={ () => setToggle(!toggle)} xs={12}>
						
							<NavLinkMobile bold>Sulje <FontAwesomeIcon icon="times"/></NavLinkMobile>
			
					</StyledCol>
				</StyledRow>
			</MobileNav>
			<Navigation  transparent={transparent} open={toggle}>
				<Row>
					<Col xs={10} sm={10} md={6} >
						<Link to="/" >
							<Logo src={LogoImage}/>
						</Link>
					</Col>
					{/* <NavLinkContainer  md={2}>
						<Link to="ostotoimeksianto"><NavLink>Ostotoimeksianto </NavLink></Link>
					</NavLinkContainer> */}
					<NavLinkContainer  md={2}>
						<Link to="haku"><NavLink>Haku</NavLink></Link>
					</NavLinkContainer>
					<NavLinkContainer  md={2}>
						<Link to="omat-toimeksiannot"><NavLink>Toimeksiannot</NavLink></Link>
					</NavLinkContainer>
						<Hamburger xs={2} sm={2} md={6}  open={toggle}>
							<IconContainer right>
								<FontAwesomeIcon icon="bars" onClick={ () => setToggle(!toggle)}/>
							</IconContainer>
						</Hamburger>
			
				</Row>
			</Navigation>
		</div>

  )
}


  
export default Nav;
