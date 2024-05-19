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
    left: -76px;
    margin-top: 460px;
    position: relative;
    width: 111.2%;
    overflow: hidden;
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
    bottom: 97px;
    animation: ${moveFromLeft} 10s infinite linear alternate; 
    &:first-child{
    top: 0;
    bottom: 0;
}
`, Title = styled.h2`
    display: inline;
    font-size: 30px;
    font-weight: 600;
    margin-left: 77px;
`, Select = styled.select`
    width: 280px;
    height: 40px;
    border-radius: 40px;
    font-size: 22px;
    background: transparent;
    border: 2px solid #11009e;
    padding-left: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
`, Arrow = styled.img`
    position: absolute;
    top: 1px;
    left: 88%;
    z-index: -5;
`, SelectWrapper = styled.div`
    position: relative;
    display: inline;
`, WrapperSlider = styled.div`
    margin-top: 50px;
`,
    WrapperItemsSlider = styled.div`
    position: relative;
    width: 30vw !important;
    transition: .3s all;
    margin-bottom: 35px;
    border-radius: 13px;
    margin-left: 50px;
    height: 620px;
    &:hover{
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1),
        -1px 1px 3px 0 rgba(0, 0, 0, 0.1),
        -4px 5px 6px 0 rgba(0, 0, 0, 0.09),
        -9px 10px 8px 0 rgba(0, 0, 0, 0.05),
        -16px 19px 10px 0 rgba(0, 0, 0, 0.01),
        -25px 29px 11px 0 rgba(0, 0, 0, 0);
    }
`, Picture = styled.img`
    width: 30vw ;
`, Name = styled.h2`
    font-size: 30px;
    margin-top: 20px;
    margin-left: 10px;
`, Ingredient = styled.h3`
    font-size: 22px;
    margin-left: 10px;
    line-height: 1.2;
    margin-top: 20px;
    margin-bottom: 20px;
`, Weight = styled.h3`
    position: absolute;
    bottom: 11px;
    font-size: 22px;
    display: inline;
    margin-left: 11px;
`, Price = styled.h3`
    bottom: 11px;
    position: absolute;
    font-size: 22px;
    display: inline;
    right: 11px; 
`, ImgL = styled.img`
    position: absolute;
    left: 10%;
    bottom: -11%;
    cursor: pointer;
`, ImgR = styled.img`
    cursor: pointer;
    position: absolute;
    right: 10%;  
    bottom: -11%;
    transform: rotateY(180deg) ;
       
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
                marginTop: '50px'
            };
        return (
            <SectionPosition id='menu'>
                <Line src={line} alt="" />
                <Title>This month's top positions</Title>
                <div style={{position:"absolute", right:'77px', top: "166px"}}>
                    <SelectWrapper>
                        <Arrow src={arrowSelector} alt="" />
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
                </div>
                <WrapperSlider>
                    <Slider {...settings}>
                        <WrapperItemsSlider>
                            <Picture src={variety} alt="Image 1"/>
                            <Name>Variety set</Name>
                            <Ingredient>Nigiri with salmon, eel, shrimp, tiger prawn, octopus, mussels,
                                mango</Ingredient>
                            <Weight>420 g</Weight>
                            <Price>$12</Price>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={bowl} alt="Image 1"/>
                            <Name>Bowl with beef</Name>
                            <Ingredient>Rice noodles, chicken eggs, beef, corn, seaweed, cucumbers, baby
                                onions</Ingredient>
                            <Weight>350 g</Weight>
                            <Price>$7</Price>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={fried} alt="Image 1" />
                            <Name>Fried roll</Name>
                            <Ingredient>Roll with shrimp, rolls with salmon, cream cheese cap</Ingredient>
                            <Weight>300 g</Weight>
                            <Price>$8</Price>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={pork} alt="Image 1" />
                            <Name>Pork carpaccio</Name>
                            <Ingredient>Pork tenderloin, arugula, parmesan, lemon juice, olive oil</Ingredient>
                            <Weight>120 g</Weight>
                            <Price>$5</Price>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={philadelphia} alt="Image 1" />
                            <Name>Philadelphia classic</Name>
                            <Ingredient>Cheese cream, salmon, avocado, cucumber, rice, nori</Ingredient>
                            <Weight>350 g</Weight>
                            <Price>$5</Price>
                        </WrapperItemsSlider>
                        <WrapperItemsSlider>
                            <Picture src={roll} alt="Image 1" />
                            <Name>Roll with crab</Name>
                            <Ingredient>Rice, crab meat, avocado, cucumber, nori</Ingredient>
                            <Weight>250 g</Weight>
                            <Price>$9</Price>
                        </WrapperItemsSlider>
                    </Slider>
                </WrapperSlider>
                <Line src={line} alt=""/>
            </SectionPosition>
        );
    }
}
