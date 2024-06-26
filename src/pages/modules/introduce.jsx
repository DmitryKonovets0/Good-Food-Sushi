import React from 'react';
import {Component} from "react";
import styled from 'styled-components';
import { Link } from "react-scroll";

import logo from "../../assets/icons/logo.svg";
import fish from "../../assets/images/fish-with-bubble.svg";
import delicious from "../../assets/images/delicious.svg";
import holiday from "../../assets/images/holidays.svg";
import deliciousMobile from "../../assets/images/delicious-mobile.svg";
import bubble1 from "../../assets/icons/bubble-1.svg";
import bubble2 from "../../assets/icons/bubble-2.svg";
import bubble3 from "../../assets/icons/bubble-3.svg";
import bubble4 from "../../assets/icons/bubble-4.svg";
import bubble5 from "../../assets/icons/bubble-5.svg";
const SectionIntroduce = styled.section`
    height: 759px;
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
        height: 1225px;
    }
`, Container = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 97%;
    }
`, Header = styled.nav`
    padding-top: 37px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`, Logo = styled.img`
`, Ul = styled.ul`
    display: flex;
    width: 530px;
    justify-content: space-around;
    @media (max-width: 850px) {
        width: 67%;
    }
    @media (max-width: 768px) {
        display: none;    
    }
`, Li = styled.li`
    font-size: 20px;
    display: flex;
    align-items: flex-start;
    transition: all 1s;
    a{
        &:hover{
        color: #11009e;
        }
    }

`, BurgerWrapper = styled.div`
   display: none;
    width: 30px;
    height: 27px;
    padding-top: 13px;
    cursor: pointer;
    @media (max-width: 768px) {
        display: block;
    }
`, Burger = styled.div`
    position: relative;
    border-radius: 3px;
    width: 30px;
    height: 4px;
    background-color: #000;
    &:after{
        border-radius: 3px;
        position: absolute;
        top: -10px;
        content: '';
        width: 30px;
        height: 4px;
        background-color: #000;
    }
    &:before{
        border-radius: 3px;
        position: absolute;
        content: '';
        top: 10px;
        width: 30px;
        height: 4px;
        background-color: #000;
    }
`,
    FishWrapper = styled.div`
    width: 300px;
    position: relative;
    right: -50%;
    top: -7px;
    @media (max-width: 1200px) {
        right: -38%;
    }
    @media (max-width: 600px) {
        right: 0;
        left: 13%;
    }
`,
    FishImg = styled.img`
    position: absolute;
    right: ${props => props.visibility ? "-174%" : '-1550%' };
    top: 164px;
    z-index: -3;
    transition: .5s all;
    @media (max-width: 768px) {
        width: 400px;
        right: ${props => props.visibility ? "-74%" : '-1550%' };
        top: 245px;
    }
    @media (max-width: 600px) {
        width: 360px;
    }
`, BubbleWrapper = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    right: -49%;
    top: 0;
    @media (max-width: 768px) {
        height: 400px;
        width: 220px;
        right: -11%;
        top: -24px;
    }
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
    @media (max-width: 600px) {
        width: 9%;
    }
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
    top: 140px;
    gap: 30px;
    left: 5%;
    @media (max-width: 768px) {
        display: none;
    }
`, Delicious = styled.img`
    top: -123px;
    transition: .5s all;
    position: absolute;
    left: ${props => props.visibility ? "0" : '-90%' };
    @media (max-width: 1200px) {
        top: -103px;
        width: 70%;            
    }
`, Holiday = styled.img`
    position: absolute;
    transition: .5s all;
    left: ${props => props.visibility ? "0" : '-300%' };
    @media (max-width: 1200px) {
        width: 70%;
    }
`, TitleMobile = styled.img`
    display: none;
    position: absolute;
    bottom: 159px;
    left: 3%;
    width: 425px;
    margin-left: ${props => props.visibility ? "0" : '-150%' };
    transition: .5s all;
            @media (max-width: 768px) {
        display: block;
    }
    @media (max-width: 600px) {
        width: 337px;
    }
`,
    Button = styled.button`
    position: absolute;
    bottom: 0;
    width: 250px;
    height: 65px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #11009e ;
    font-size: 25px;
    color: #f3f3f3;
    margin-left: ${props => props.visibility ? "0" : '-150%' };
    transition: .5s all;
    &:hover {
        background-color: #ADC7EF; /* Цвет при наведении с измененной прозрачностью */
    }
        @media (max-width: 768px) {
            bottom: 78px;
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
                <Container>
                    <Header>
                        <Logo src={logo} alt=""/>
                        <Ul>
                            <Li><Link style={{ cursor: 'pointer' }} to="about" spy={true} smooth={true} duration={500} offset={-50}>About</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="menu" spy={true} smooth={true} duration={500} offset={-50}>Menu</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="articles" spy={true} smooth={true} duration={500} offset={-50}>Articles</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="delivery" spy={true} smooth={true} duration={500} offset={-250}>Delivery</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="contacts" spy={true} smooth={true} duration={500} offset={-150}>Contacts</Link></Li>
                        </Ul>
                        <BurgerWrapper>
                            <Burger></Burger>
                        </BurgerWrapper>
                    </Header>
                    <Button visibility={this.state.visibility}>
                        make an order
                    </Button>
                </Container>
                <FishWrapper>
                    <FishImg src={fish} alt="" visibility={this.state.visibility}/>
                    <BubbleWrapper visibility={this.state.visibility}>
                        <FirstBubble src={bubble1} alt="Bubble 1" visibility={this.state.visibility}/>
                        <SecondBubble src={bubble2} alt="Bubble 2" visibility={this.state.visibility}/>
                        <ThirdBubble src={bubble3} alt="Bubble 3" visibility={this.state.visibility}/>
                        <FourthBubble src={bubble4} alt="Bubble 4" visibility={this.state.visibility}/>
                        <FifthBubble src={bubble5} alt="Bubble 5" visibility={this.state.visibility}/>
                    </BubbleWrapper>
                </FishWrapper>
                <TitleMobile src={deliciousMobile} alt="Title" visibility={this.state.visibility} />
                <TextWrapper>
                    <Delicious src={delicious} alt="Title" visibility={this.state.visibility}/>
                    <Holiday src={holiday} alt="Title" visibility={this.state.visibility} />
                </TextWrapper>
            </SectionIntroduce>
        )
    }
}