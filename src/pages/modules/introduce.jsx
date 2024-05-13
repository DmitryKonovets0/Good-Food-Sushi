import React from 'react';
import {Component} from "react";
import styled, { keyframes } from 'styled-components';

import logo from "../../assets/icons/logo.svg";
import fish from "../../assets/images/fish.svg";
import delicious from "../../assets/images/delicious.svg";
import holiday from "../../assets/images/holidays.svg";
import bubble1 from "../../assets/icons/bubble-1.svg";
import bubble2 from "../../assets/icons/bubble-2.svg";
import bubble3 from "../../assets/icons/bubble-3.svg";
import bubble4 from "../../assets/icons/bubble-4.svg";
import bubble5 from "../../assets/icons/bubble-5.svg";

const SectionIntroduce = styled.section`
    height: 763px;
`, Header = styled.nav`
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
    transition: all 1s;
    a{
        &:hover{
        color: #11009e;
        }
    }
`, LanguageToggle = styled.div`
    display: flex;
    margin-top: 54px;
    gap: 10px;
`, Language = styled.div`
    height: 17px;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #11009e;
    }
`, Line = styled.div`
    background: #000;
    width: 1px;
    height: 30px;
`, FishImg = styled.img`
    transform: rotate(314deg);
    position: absolute;
    right: ${props => props.visibility ? "-5%" : '-200%' };
    top: 110px;
    transition: .5s all;
`, BubbleWrapper = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    right: -50%;
`, FirstBubble = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "46%" : '-300%'};
    transition: .5s all;
    top: 32%;
`,
    SecondBubble = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "20%" : '-500%'};
    transition: .5s all;
    top: 23%;
`,
    ThirdBubble = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "48%" : '-1200%'};
    transition: .5s all;
    top: 54%;
`, FourthBubble = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "20%" : '-2000%'};
    transition: .5s all;
    top: 63%;
`, FifthBubble = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "30%" : '-2000%'};
    transition: .5s all;
    top: 72%;
`,
    TextWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    top: 169px;
    gap: 30px;
`, Delicious = styled.img`
    top: -123px;
    transition: .5s all;
    position: absolute;
    left: ${props => props.visibility ? "-1%" : '-62%' };
`, Holiday = styled.img`
    position: absolute;
    transition: .5s all;
    left: ${props => props.visibility ? "-1%" : '-300%' };
`,Button = styled.button`
    width: 250px;
    height: 65px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #11009e ;
    font-size: 25px;
    color: #f3f3f3;
    margin-top: 342px;
    margin-left: ${props => props.visibility ? "0" : '-50%' };
    transition: .5s all;
    &:hover {
        background-color: #ADC7EF; /* Цвет при наведении с измененной прозрачностью */
    }
`;


export default class Introduce extends Component {
    constructor() {
        super();
        this.state = {
            visibility: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ visibility: true }, () => {
                console.log("State changed:", this.state.visibility);
            });}, 300)
    }
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
                <FishImg src={fish} alt="" visibility={this.state.visibility}/>
                <BubbleWrapper visibility={this.state.visibility}>
                    <FirstBubble src={bubble1} alt="Bubble 1" visibility={this.state.visibility}/>
                    <SecondBubble src={bubble2} alt="Bubble 2" visibility={this.state.visibility}/>
                    <ThirdBubble src={bubble3} alt="Bubble 3" visibility={this.state.visibility}/>
                    <FourthBubble src={bubble4} alt="Bubble 4" visibility={this.state.visibility}/>
                    <FifthBubble src={bubble5} alt="Bubble 5" visibility={this.state.visibility}/>
                </BubbleWrapper>
                <TextWrapper>
                    <Delicious src={delicious} alt="" visibility={this.state.visibility}/>
                    <Holiday src={holiday} alt="" visibility={this.state.visibility} />
                </TextWrapper>
                <Button visibility={this.state.visibility}>
                    make an order
                </Button>
            </SectionIntroduce>
        )
    }
}