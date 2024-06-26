import React from 'react';
import {Component} from "react";
import styled from "styled-components";

import fish from '../../assets/images/fish-info.svg'
const SectionInfo = styled.section`
    position: relative;
    margin-top: 300px;
    min-height: 920px;
    @media (max-width: 768px) {
        height: 1360px;
    }
`, Container = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 96%;
    }
`, Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 30%); ;
    column-gap: 40%;
    row-gap: 126px ;
    @media (max-width: 768px) {
        display: flex;
        gap: 50px;
        flex-direction: column;
    }
`, WrapperInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 97%;
`, Heading = styled.h2`
    font-family: 'NeueMachinaRegular', sans-serif;
    color: #11009e;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 1200px) {
        font-size: 29px;
    }
    @media (max-width: 768px) {
        font-size: 28px;
    }
    
`, Description = styled.div`
    font-size: 22px;
    margin-top: 20px;
    line-height: 1.2;
    text-align: left;
    @media (max-width: 1200px) {
        font-size: 21px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
`, Fish = styled.img`
    position: absolute;
    left: 35%;
    top: ${props => props.fishVisible ? '8%' : '100%'};
    transition: .3s all;
    @media (max-width: 1200px) {
       left: 31%;
    }
    @media (max-width: 1024px) {
        left: 28%;
        width: 42%;
    }
    @media (max-width: 768px) {
        top: auto;
        bottom: -10%;
    }
`
export default class Info extends Component{
    constructor(fishVisible) {
        super(fishVisible);
}
    render() {
        const { fishVisible } = this.props;
        return(
            <SectionInfo id='about'>
                <Container>
                    <Grid>
                        <WrapperInfoBlock>
                            <Heading>
                                Fresh products
                            </Heading>
                            <Description>
                                Your order is prepared on the day of delivery, and the products from which it is prepared are stored for a maximum of 3 days before preparation, which ensures the freshness of all ingredients
                            </Description>
                        </WrapperInfoBlock>
                        <Fish src={fish} alt="" fishVisible={fishVisible}/>
                        <WrapperInfoBlock>
                            <Heading>
                                A variety of tastes
                            </Heading>
                            <Description>
                                We have made an effort to make our menu interesting, full of many items from different ingredients to satisfy everyone's desire
                            </Description>
                        </WrapperInfoBlock>
                        <WrapperInfoBlock>
                            <Heading>
                                Large portions
                            </Heading>
                            <Description>
                                We fulfill orders for a large number of people to fully ensure your holiday is delicious
                            </Description>
                        </WrapperInfoBlock>
                        <WrapperInfoBlock>
                            <Heading>
                                Packaging
                            </Heading>
                            <Description>
                                In addition to the obvious (quality packaging, with which the products remain whole and fresh), we also provide the opportunity to choose festive packaging. So you can order from us not only food,
                                but also a complete gift!
                            </Description>
                        </WrapperInfoBlock>
                        <WrapperInfoBlock>
                            <Heading>
                                Dream team
                            </Heading>
                            <Description>
                                Our team consists of professional chefs, friendly managers and real masters of quality delivery. In addition, we also have responsible purchasing managers who select only the best suppliers
                            </Description>
                        </WrapperInfoBlock>
                        <WrapperInfoBlock>
                            <Heading>
                                Delivery
                                before the holidays
                            </Heading>
                            <Description>
                                We deliver the freshly prepared products of your choice on the day and time of your choice
                            </Description>
                        </WrapperInfoBlock>
                    </Grid>
                </Container>
            </SectionInfo>
        )
    }
}