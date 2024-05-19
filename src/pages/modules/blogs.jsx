import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow from '../../assets/icons/arrow.svg';
import historyOfSushi from '../../assets/images/history.png'
import misterious from '../../assets/images/misterious.png'
import main from '../../assets/images/main.png'
import symbiosis from '../../assets/images/symbiosis.png'
import art from '../../assets/images/art-sushi.png'
import clock from '../../assets/icons/clock.svg'
const BlogsSection = styled.section`
    height: 630px;
    position: relative;
    margin-top: 169px;
`, WrapperItemsSlider = styled.div`
    margin-bottom: 20px;
    position: relative;
    transition: .3s all;
    margin-left: 50px;
    width: 97% !important;
    height: 100%;
    padding-bottom: 10px;
    border-radius: 13px;
    &:hover{
        box-shadow: -1px 2px 4px 0 rgba(28, 28, 28, 0.1), -3px 6px 7px 0 rgba(28, 28, 28, 0.09), -6px 14px 10px 0 rgba(28, 28, 28, 0.05), -11px 26px 11px 0 rgba(28, 28, 28, 0.01), -18px 40px 12px 0 rgba(28, 28, 28, 0);
`,SliderPicture = styled.img`
    margin-bottom: 21px;
    width: 100%;
    height: 118%; 
`, SlideTitle = styled.h2`
    display: inline;
    font-size: 30px;
    margin-left: 10px;
    text-align: left;
    @media (max-width: 1024px) {
        font-size: 28px;
    }
`, WrapperTime = styled.div`
    position: absolute;
    right: 10px;
    bottom: 13px;
    width: 100px;
    height: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`,
    SlideTime = styled.h3`
    font-size: 22px;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
`, SlideIcon = styled.img`
    width: 23px;
`,CustomNextArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <ImgR src={arrow} alt=""/>
    </div>
), CustomPrevArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <ImgL src={arrow} alt=""/>
    </div>
), ImgL = styled.img`
    position: absolute;
    left: 10%;
    bottom: -25%;
    cursor: pointer;
`, ImgR = styled.img`
    cursor: pointer;
    position: absolute;
    right: 10%;  
    bottom: -25%;
    transform: rotateY(180deg) ;
`
export default class Blogs extends Component {
    render() {
        const settings = {
            infinite: false,
            slidesToShow: 1.7,
            slidesToScroll: 1,
            swipeToSlide: true,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />,
        };
        return(
            <BlogsSection id='articles'>
                <Slider {...settings}>
                    <WrapperItemsSlider>
                        <SliderPicture src={historyOfSushi} alt="History" />
                        <SlideTitle>History of sushi</SlideTitle>
                        <WrapperTime>
                            <SlideTime>5 min</SlideTime>
                            <SlideIcon src={clock} alt=""/>
                        </WrapperTime>
                    </WrapperItemsSlider>
                    <WrapperItemsSlider>
                        <SliderPicture src={misterious} alt="History" />
                        <SlideTitle>The mysterious appeal of...</SlideTitle>
                        <WrapperTime>
                            <SlideTime>5 min</SlideTime>
                            <SlideIcon src={clock} alt=""/>
                        </WrapperTime>
                    </WrapperItemsSlider>
                    <WrapperItemsSlider>
                        <SliderPicture src={main} alt="History" />
                        <SlideTitle>The main components</SlideTitle>
                        <WrapperTime>
                            <SlideTime>5 min</SlideTime>
                            <SlideIcon src={clock} alt=""/>
                        </WrapperTime>
                    </WrapperItemsSlider>
                    <WrapperItemsSlider>
                        <SliderPicture src={symbiosis} alt="History" />
                        <SlideTitle>Symbiosis of tradition and...</SlideTitle>
                        <WrapperTime>
                            <SlideTime>5 min</SlideTime>
                            <SlideIcon src={clock} alt=""/>
                        </WrapperTime>
                    </WrapperItemsSlider>
                    <WrapperItemsSlider>
                        <SliderPicture src={art} alt="History" />
                        <SlideTitle>The art of sushi chefs in...</SlideTitle>
                        <WrapperTime>
                            <SlideTime>5 min</SlideTime>
                            <SlideIcon src={clock} alt=""/>
                        </WrapperTime>
                    </WrapperItemsSlider>
                </Slider>
            </BlogsSection>
        )
    }

}