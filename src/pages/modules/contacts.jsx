import React, { Component } from 'react';
import styled from 'styled-components';

import fish from '../../assets/images/fish-contacts.png'
import map from '../../assets/images/map.png'
import phone from '../../assets/icons/mobile.svg'
import instagram from '../../assets/icons/instagram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import telegram from '../../assets/icons/telegram.svg'
const ContactsSection = styled.section`
    height: 800px;
    position: relative;
    display: grid;
    grid-template-columns: 580px 394px;
    column-gap: 28%;
    margin-top: 400px;
`,Fish = styled.img`
    position: absolute;
    top: -37%;
    z-index: -3;
    left: 217px;
`,Map = styled.img`
    display: block;
`,Heading = styled.h2`
    font-size: 30px;
    text-align: right;
`,Subheading = styled.h3`
    margin-top: 50px;
    font-size: 22px;
    width: 394px;
    text-align: right;
`,WrapperIcons = styled.div`
    justify-content: space-between;
    margin-top: 336px;
    display: flex;
`,IconLinks = styled.a`
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-radius: 100%;
    background-color: #11009e;
`
export default class Contacts extends Component {


    render() {
        return(
            <ContactsSection>
                <Fish src={fish} alt="fish" />
                <Map src={map} alt="map" />
                <div>
                    <Heading>Contacts</Heading>
                    <Subheading>If you have any questions, choose a convenient method of communication and let us help you.</Subheading>
                    <WrapperIcons>
                        <IconLinks href="#">
                            <img src={phone} alt=""/>
                        </IconLinks>
                        <IconLinks href="#">
                            <img src={instagram} alt=""/>
                        </IconLinks>
                        <IconLinks href="#">
                            <img src={whatsapp} alt=""/>
                        </IconLinks>
                        <IconLinks href="#">
                            <img src={telegram} alt=""/>
                        </IconLinks>
                    </WrapperIcons>
                </div>
            </ContactsSection>
        )
    }
}