import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import line from '../../assets/images/line.svg';
import arrowSelector from '../../assets/icons/arrow-input.png';
import arrow from '../../assets/icons/arrow.svg';
import variety from '../../assets/images/variety.png';
import bowl from '../../assets/images/bowl-with-beef.png';
import fried from '../../assets/images/fried-roll.png';
import pork from '../../assets/images/pork.png';
import philadelphia from '../../assets/images/philadelphia.png';
import roll from '../../assets/images/roll-with-crab.png';

const SectionPosition = styled.section`
    padding-top: 170px;
    height: 1181px;
    margin-top: 460px;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
        padding-top: 109px;
    }
    `, moveFromLeft = keyframes`
    from {
        right: -91%; 
    }
    to {
        right: 1%;
    }
`, Line = styled.img`
    position: absolute;
    width: 190%;
    animation: ${moveFromLeft} 10s infinite linear alternate;
    margin-top: 120px;
    @media (max-width: 768px) {
        margin-top: 76px;
    }
    &:first-child{
        top: 0;
    margin-top: 0;
}
`, Title = styled.h2`
    display: inline;
    font-size: 30px;
    font-weight: 600;
    margin-left: 49px;
    @media (max-width: 862px) {
        display: block;
        text-align: center;
        margin-left: auto;
    }
`, Select = styled.select`
    position: relative;
    width: 280px;
    height: 40px;
    border-radius: 40px;
    font-size: 22px;
    background: transparent;
    border: 2px solid #11009e;
    padding-left: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    @media (max-width: 862px) {
        width: 411px;
        display: block;
    }
`, SelectWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after{
        content: '';
        position: relative;
        top: 0;
        left: -38px;
        background: url(${arrowSelector})  center center / cover no-repeat ;
        height: 16px;
        width: 16px;
    }
    @media (max-width: 862px) {
        margin-left: 22px;
    }
`, WrapperWrapper = styled.div`
    position: absolute;
    right: 77px;
    top: 166px;
    @media (max-width: 862px) {
        position: static;
        margin-top: 20px;
    }
`,
    WrapperSlider = styled.div`
    margin-top: 50px;
`,
    WrapperItemsSlider = styled.div`
    position: relative;
    width: 30vw !important;
    transition: .3s all;
    margin-bottom: 35px;
    border-radius: 13px;
    margin-left: 50px;
    height: auto;
    &:hover{
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1),
        -1px 1px 3px 0 rgba(0, 0, 0, 0.1),
        -4px 5px 6px 0 rgba(0, 0, 0, 0.09),
        -9px 10px 8px 0 rgba(0, 0, 0, 0.05),
        -16px 19px 10px 0 rgba(0, 0, 0, 0.01),
        -25px 29px 11px 0 rgba(0, 0, 0, 0);
    }
    @media (max-width: 768px) {
        margin-left: 19px;
        width: 46vw !important
    }
`, Picture = styled.img`
    width: 30vw ;
    @media (max-width: 768px) {
        width: 46vw
    }
`, Name = styled.h2`
    font-size: 30px;
    margin-top: 20px;
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 1024px) {
        font-size: 29px;
    }
`, Ingredient = styled.h3`
    font-size: 22px;
    margin-left: 10px;
    line-height: 1.2;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 130px;
    @media (max-width: 1024px) {
        font-size: 21px;
    }
`,  WrapperWeight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;  
    width: 97%;
    margin-bottom: 5px;
`,
    Weight = styled.h3`
    font-size: 22px;
    display: inline;
    margin-left: 11px;
`, Price = styled.h3`
    font-size: 22px;
    display: inline;
`, ImgL = styled.img`
    position: absolute;
    left: 10%;
    bottom: -11%;
    cursor: pointer;
    @media (max-width: 768px) {
        display: none;
    }
`, ImgR = styled.img`
    cursor: pointer;
    position: absolute;
    right: 10%;  
    bottom: -11%;
    transform: rotateY(180deg) ;
    @media (max-width: 768px) {
        display: none;
    }
`, CustomNextArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <ImgR src={arrow} alt=""/>
    </div>
), CustomPrevArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <ImgL src={arrow} alt=""/>
    </div>
)


export default class TopPositions extends Component {

    render() {
            const settings = {
                infinite: false,
                center: false,
                slidesToShow: 3.2,
                slidesToScroll: 1,
                swipeToSlide: true,
                lazyLoad: true,
                centeredSlides: true,
                nextArrow: <CustomNextArrow />,
                prevArrow: <CustomPrevArrow />,
                marginTop: '50px',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    }]
            };
        return (
            <SectionPosition id='menu'>
                <Line src={line} alt="" />
                <Title>This month's top positions</Title>
                <WrapperWrapper >
                    <SelectWrapper>
                        <Select name="pets" id="pet-select">
                            <option value="">Sort by</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </Select>
                    </SelectWrapper>
                </WrapperWrapper>
                <WrapperSlider>
                    <Slider {...settings}>
                        <WrapperItemsSlider>
                            <Picture src={variety} alt="Image 1"/>
                            <Name>Variety set</Name>
                            <Ingredient>Nigiri with salmon, eel, shrimp, tiger prawn, octopus, mussels, mango</Ingredient>
                            <WrapperWeight>
                                <Weight>420 g</Weight>
                                <Price>$12</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={bowl} alt="Image 1"/>
                            <Name>Bowl with beef</Name>
                            <Ingredient>Rice noodles, chicken eggs, beef, corn, seaweed, cucumbers, baby onions</Ingredient>
                            <WrapperWeight>
                                <Weight>350 g</Weight>
                                <Price>$7</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={fried} alt="Image 1" />
                            <Name>Fried roll</Name>
                            <Ingredient>Roll with shrimp, rolls with salmon, cream cheese cap</Ingredient>
                            <WrapperWeight>
                                <Weight>300 g</Weight>
                                <Price>$8</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={pork} alt="Image 1" />
                            <Name>Pork carpaccio</Name>
                            <Ingredient>Pork tenderloin, arugula, parmesan, lemon juice, olive oil</Ingredient>
                            <WrapperWeight>
                                <Weight>120 g</Weight>
                                <Price>$5</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={philadelphia} alt="Image 1" />
                            <Name>Philadelphia classic</Name>
                            <Ingredient>Cheese cream, salmon, avocado, cucumber, rice, nori</Ingredient>
                            <WrapperWeight>
                                <Weight>350 g</Weight>
                                <Price>$5</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={roll} alt="Image 1" />
                            <Name>Roll with crab</Name>
                            <Ingredient>Rice, crab meat, avocado, cucumber, nori</Ingredient>
                            <WrapperWeight>
                                <Weight>250 g</Weight>
                                <Price>$9</Price>
                            </WrapperWeight>
                        </WrapperItemsSlider>
                    </Slider>
                    <Line src={line} alt=""/>
                </WrapperSlider>
            </SectionPosition>
        );
    }
}
