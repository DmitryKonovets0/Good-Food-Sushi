import * as React from "react"
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import NeueMachinaLight from "../assets/fonts/PPNeueMachina-InktrapLight.otf";
import NeueMachinaRegular from "../assets/fonts/PPNeueMachina-InktrapRegular.otf";

import Introduce from "./modules/introduce";
import Info from "./modules/info";
import TopPositions from "./modules/top-positions";
import SushiBg from "./modules/sushi-bg";
import Blogs from "./modules/Blogs";
import Order from "./modules/order";
import Contacts from "./modules/contacts";

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`, GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NeueMachinaLight';
        src: url(${NeueMachinaLight}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NeueMachinaRegular';
        src: url(${NeueMachinaRegular}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-style: normal;
    }
    h2 {
        font-family: 'NeueMachinaRegular', sans-serif;
    }
    h3,li,div,input,button,select {
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        font-style: normal;

    }
    body{
        background-color: #fdfff1;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: black;
    }
`
export default class IndexPage extends Component {
    render() {
        return(
                <Container>
                    <GlobalStyle/>
                    <Introduce/>
                    <Info/>
                    <TopPositions/>
                    <SushiBg/>
                    <Blogs/>
                    <Order/>
                    <Contacts/>
                </Container>
        )
    }

}
export const Head = () => <title>Home Page</title>
