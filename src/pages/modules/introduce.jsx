import React from 'react';
import {Component} from "react";
import styled from "styled-components";

import logo from "../../assets/icons/logo.svg";
import fish from "../../assets/images/fish-with-bubble.svg";
import delicious from "../../assets/images/delicious.svg";
import holiday from "../../assets/images/holidays.svg";


const SectionIntroduce = styled.section`
    height: 1063px;
`, Header = styled.div`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 124px 550px 113px;
    column-gap: 287px;
`, Logo = styled.img`
    margin-top: 37px;
`, Ul = styled.ul`
    margin-top: 56px;
    display: flex;    
`, Li = styled.li`
    font-size: 20px;
    display: flex;
    align-items: flex-start;
    width: 20%;
`, LanguageToggle = styled.div`
    display: flex;
    margin-top: 54px;
    gap: 10px;
`, Language = styled.div`
    margin-top: 5px;
`, Line = styled.div`
    background: #000;
    width: 1px;
    height: 30px;
`, FishImg = styled.img`
        position: absolute;
        right: -1%;
        top: 157px;
`, TextWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 410px;
    gap: 30px;
`, ButtonMake = styled.button`
    width: 250px;
    height: 65px;
    padding: 10px;
    border-radius: 10px;
    background-color: #11009e;
    border: none;
    font-size: 25px;
    color: #f3f3f3;
    margin-top: 569px;
`


export default class Introduce extends Component {

    render() {
        return(
            <SectionIntroduce>
                <Header>
                    <Logo src={logo} alt=""/>
                    <Ul>
                        <Li><a href='#'>About</a> </Li>
                        <Li><a href='#'>Menu</a> </Li>
                        <Li><a href='#'>Articles</a></Li>
                        <Li><a href='#'>Delivery</a></Li>
                        <Li><a href='#'>Contacts</a></Li>
                    </Ul>
                    <LanguageToggle>
                        <Language>ENG</Language>
                        <Line></Line>
                        <Language>UA</Language>
                    </LanguageToggle>
                </Header>
                <FishImg src={fish} alt=""/>
                <TextWrapper>
                    <img src={delicious} alt=""/>
                    <img src={holiday} alt=""/>
                </TextWrapper>
                <ButtonMake>
                    make an order
                </ButtonMake>
            </SectionIntroduce>
        )
    }
}