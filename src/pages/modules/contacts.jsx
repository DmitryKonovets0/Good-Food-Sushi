import React, { Component } from 'react';
import styled from 'styled-components';

import fish from '../../assets/images/fish-contacts.png'
import map from '../../assets/images/map.png'
import phone from '../../assets/icons/mobile.svg'
import instagram from '../../assets/icons/instagram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import telegram from '../../assets/icons/telegram.svg'
const ContactsSection = styled.section`
    height: 581px;
    position: relative;
    margin-top: 400px;
`,Container = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 96%;
    }
`, Grid = styled.div`
    display: grid;
    grid-template-columns: 47vw 29.9vw;
    column-gap: 13vw;
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        height: 752px;
    }
`,  Fish = styled.img`
    position: absolute;
    top: -37%;
    z-index: -3;
    left: 217px;
    @media (max-width: 1200px) {
        width: 52%; 
    }
    @media (max-width: 992px) {
        display: none;
    }
`, Map = styled.img`
    @media (max-width: 992px) {
        margin-top: 41px;
    }
    @media (max-width: 606px) {
        width: 100%;
    }
`, WrapperBlocks = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 992px) {
        align-items: center;
    }
    @media (max-width: 768px) {
        align-items: center;
        width: 100%;
    }
`,Heading = styled.h2`
    font-size: 30px;
    text-align: right;
`,Subheading = styled.h3`
    margin-top: 50px;
    font-size: 22px;
    width: 25.8vw;
    text-align: right;
    margin-left: auto;
    @media (max-width: 992px) {
        margin-left: 0;
        text-align: center;
        width: 508px;
    }
`,WrapperIcons = styled.div`
    justify-content: space-between;
    display: flex;
    margin-top: auto;
    @media (max-width: 992px) {
        margin-top: 20px;
        width: 350px;
    }
`,IconLinks = styled.a`
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-radius: 100%;
    background-color: #11009e;
    @media (max-width: 1200px) {
        width: 70px;
        height: 70px;
    }
`, IconsLink = styled.img`
    @media (max-width: 1200px) {    
        height: 60%;
    }
`
export default class Contacts extends Component {


    render() {
        return(
            <ContactsSection id="contacts">
                <Container>
                    <Grid>
                            <Fish src={fish} alt="fish"/>
                            <Map src={map} alt="map"/>
                        <WrapperBlocks>
                            <Heading>Contacts</Heading>
                            <Subheading>If you have any questions, choose a convenient method of communication and let
                                us help you.</Subheading>
                            <WrapperIcons>
                                <IconLinks href="#">
                                    <IconsLink src={phone} alt=""/>
                                </IconLinks>
                                <IconLinks href="#">
                                    <IconsLink src={instagram} alt=""/>
                                </IconLinks>
                                <IconLinks href="#">
                                    <IconsLink src={whatsapp} alt=""/>
                                </IconLinks>
                                <IconLinks href="#">
                                    <IconsLink src={telegram} alt=""/>
                                </IconLinks>
                            </WrapperIcons>
                        </WrapperBlocks>
                    </Grid>
                </Container>
            </ContactsSection>
        )
    }
}