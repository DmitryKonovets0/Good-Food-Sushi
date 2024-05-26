import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/icons/logo-footer.svg';
import {Link} from "react-scroll";

const FooterSection = styled.footer`
    margin-top: 375px;
    position: relative;
    height: 227px;
    padding-top: 50px;
    background-color: #11009e;
    @media (max-width: 768px) {
        height: 350px;
    }
`, Container = styled.div`
    @media (max-width: 768px) {
        width: 97%;
        margin: 0 auto ;  
        
    }
`, Logo = styled.img`
    display: block;
    margin: 0 auto;
    @media (max-width: 768px) {
        margin: 0;
    }
`,Column = styled.div`
    display: flex;
    width:  210px;
    justify-content: space-around;
    &:first-child {
        width: 280px;
        
    }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`, Ul = styled.ul`
    margin-top: 56px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 60px 67px;
        column-gap: 40%;
        justify-content: normal;
        height: 175px;
        margin-top: 20px;
    }
`, Li = styled.li`
    font-size: 20px;
    display: flex;
    transition: all 1s;
    a{
        color: #f3f3f3;
    }
`
export default class Footer extends Component {

    render() {
        return(
            <FooterSection>
                <Container>
                    <Logo src={logo} alt=""/>
                    <Ul>
                        <Column>
                            <Li><Link style={{ cursor: 'pointer' }} to="about" spy={true} smooth={true} duration={500} offset={-50}>About</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="menu" spy={true} smooth={true} duration={500} offset={-50}>Menu</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="articles" spy={true} smooth={true} duration={500} offset={-100}>Articles</Link></Li>
                        </Column>
                        <Column>
                            <Li><Link style={{ cursor: 'pointer' }} to="delivery" spy={true} smooth={true} duration={500} offset={-250}>Delivery</Link></Li>
                            <Li><Link style={{ cursor: 'pointer' }} to="contacts" spy={true} smooth={true} duration={500} offset={-150}>Contacts</Link></Li>
                            <li style={{opacity: 0}}></li>
                        </Column>
                    </Ul>
                </Container>
            </FooterSection>
        )
    }
}