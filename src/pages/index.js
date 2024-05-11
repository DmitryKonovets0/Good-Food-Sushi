import * as React from "react"
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";


import Introduce from "./modules/introduce";
import Info from "./modules/info";
import TopPositions from "./modules/top-positions";
import SushiBg from "./modules/sushi-bg";

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`, GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@0,600,500;1,600&display=swap');
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Nunito", sans-serif;
        font-weight: 500;
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
                </Container>
        )
    }

}
export const Head = () => <title>Home Page</title>
