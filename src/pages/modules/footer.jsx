import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/icons/logo-footer.svg';

const FooterSection = styled.footer`
    margin-top: 300px;
    position: relative;
    left: -5.6%;
    width: 111.3%;
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
                    <Li><a href='#'>About</a> </Li>
                    <Li><a href='#'>Menu</a> </Li>
                    <Li><a href='#'>Articles</a></Li>
                    <Li><a href='#'>Delivery</a></Li>
                    <Li><a href='#'>Contacts</a></Li>
                </Ul>
            </FooterSection>
        )
    }
}