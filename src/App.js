import React, { Component, useEffect } from 'react';
import { createGlobalStyle } from "styled-components";
import { Switch, Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { history } from './history';
import theme from './theme';
import Ostotoimeksianto from './views/Ostotoimeksianto';
import Toimeksiannot from './views/Toimeksiannot';
import Haku from './views/Haku';
import Home from './views/Home';
import Item from './views/Item';
import {Helmet} from "react-helmet";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faChevronUp, faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { checkLogin } from './keycloak';
import { getDataFromDb } from './requests';
import { connect } from 'react-redux';
import { simpleAction } from './actions/actions';

library.add(faBars, faTimes, faChevronUp, faChevronLeft, faUser)

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100vw;
        // border: red solid 1px;
        // overflow-x: hidden;
    body {
        background-color: #FBFBFD;

    }
    }
    h1 {
        unset: all
    }

    img {
        max-width: 100%;
    }
    *:focus {outline:none}
    a {
        all: unset;
    }
    * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        cursor:pointer;
        all: unset;
    }
`;

class App extends Component {
    componentDidMount(){
        checkLogin()
       getDataFromDb()
    }

  render() {
    return (
        
            <ThemeProvider theme={theme}>

                <Router history={history}>
                    <Switch>
                        <Route exact path="/"  component={Home} user/>
                            <Route path="/ostotoimeksianto"  component={Ostotoimeksianto} />
                            <Route path="/omat-toimeksiannot"  component={Toimeksiannot} />
                            <Route path="/haku"  component={Haku} />
                            <Route path="/:id" component={Item} />
                    </Switch>      
                    <GlobalStyle />
                    <Helmet>
                        <meta property="og:title" content="European Travel Destinations" />
                        <meta property="og:description" content="Offering tour packages for individuals or groups." />
                        <meta property="og:image" content="https://www.sponda.fi/sites/default/files/styles/property_image_thumbnail/public/images/property/190_150820_Mannerheimintie2_006.jpg?itok=e5B13-sA" />
                        <meta property="og:url" content="http://euro-travel-example.com/index.htm"/>
                </Helmet>
                </Router>
            </ThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
