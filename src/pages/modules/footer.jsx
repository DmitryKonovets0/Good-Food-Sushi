import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/icons/logo-footer.svg';
import {Link} from "react-scroll";

const FooterSection = styled.footer`
    margin-top: 200px;
    position: relative;
    height: 227px;
    padding-top: 50px;
    background-color: #11009e;
`, Logo = styled.img`
    display: block;
    margin: 0 auto;
`,Ul = styled.ul`
    margin-top: 56px;
    gap: 50px;
    display: flex;
    justify-content: center;
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
                <Logo src={logo} alt=""/>
                <Ul>
                    <Li><Link style={{ cursor: 'pointer' }} to="about" spy={true} smooth={true} duration={500} offset={-50}>About</Link></Li>
                    <Li><Link style={{ cursor: 'pointer' }} to="menu" spy={true} smooth={true} duration={500} offset={-50}>Menu</Link></Li>
                    <Li><Link style={{ cursor: 'pointer' }} to="articles" spy={true} smooth={true} duration={500} offset={-100}>Articles</Link></Li>
                    <Li><Link style={{ cursor: 'pointer' }} to="delivery" spy={true} smooth={true} duration={500} offset={-250}>Delivery</Link></Li>
                    <Li><Link style={{ cursor: 'pointer' }} to="contacts" spy={true} smooth={true} duration={500} offset={-150}>Contacts</Link></Li>
                </Ul>
            </FooterSection>
        )
    }
}