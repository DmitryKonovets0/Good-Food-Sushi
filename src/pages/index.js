import * as React from "react"
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import NeueMachinaLight from "../assets/fonts/PPNeueMachina-InktrapLight.otf";
import NeueMachinaRegular from "../assets/fonts/PPNeueMachina-InktrapRegular.otf";
import Nunito from '../assets/fonts/Nunito-Medium.ttf'

import Introduce from "./modules/introduce";
import Info from "./modules/info";
import TopPositions from "./modules/top-positions";
import SushiBg from "./modules/sushi-bg";
import Blogs from "./modules/blogs";
import Order from "./modules/order";
import Contacts from "./modules/contacts";
import Footer from "./modules/footer";

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
    @font-face {
        font-family: 'Nunito';
        src: url(${Nunito}) format('opentype');
        font-weight: 600;
        font-style: normal;
    }    
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-style: normal;
    }
    h2 {
        font-family: 'NeueMachinaRegular', sans-serif;
        font-style: normal;
        font-weight: 500;
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
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            fishVisible: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log(window.pageYOffset)
        if (window.pageYOffset >= 950) {
            this.setState({fishVisible: true});
            // Выполнить действия, когда пользователь прокрутит на 1000 пикселей
        }
    }
    render() {

        return(
                <Container>
                    <GlobalStyle/>
                    <Introduce/>
                    <Info fishVisible={this.state.fishVisible}/>
                    <TopPositions/>
                    <SushiBg/>
                    <Blogs/>
                    <Order/>
                    <Contacts/>
                    <Footer/>
                </Container>
        )
    }

}
export const Head = () => <title>Home Page</title>
