import React, { Component } from 'react';
import styled from 'styled-components';

import fish from '../../assets/images/fish-order.svg'
import arrow from '../../assets/icons/arrow-input.png'
const OrderSection = styled.section`
    position: relative;
    height: 684px;
    padding-top: 40px;
    margin-top: 300px;
    padding-bottom: 95px;
    overflow: hidden;
    width: 112%;
    left: -6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`, Heading = styled.h2`
    text-align: center;
    margin-top: 40px;
    font-size: 30px;
    font-weight: bold;
`, Subheading = styled.h3`
    margin-top: 50px;
    font-size: 22px;
    text-align: center;
`, InputsWrapper = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 349px);
    row-gap: 50px;
    column-gap: 82px;
`,InputText = styled.input`
    width: 349px;
    font-size: 22px;
    height: 40px;
    border-radius: 40px;
    border: solid 1px #11009e;
    background-color: transparent;
    padding-left: 7px;
    color: #181818;
    &::placeholder {
        color: #181818;
        opacity: 1; /* Firefox */
    }
`,SelectWrapper = styled.div`
    position: relative;
`,
    Select = styled.select`
    width: 349px;
    font-size: 22px;
    height: 40px;
    border-radius: 40px;
    border: solid 1px #11009e;
    background-color: transparent;
    padding-left: 7px;
    color: #181818;
    -webkit-appearance: none;
    -moz-appearance: none;
`, SelectArrow = styled.img`
    position: absolute;
    top: 35%;
    right: 3%;
`,
    FishR = styled.img`
    position: absolute;
    transform: ${props => props.fish ? "rotate(-20deg)" : "rotate(0deg)"};
    right: -20%;
    top: 13%;
    transition: .5s all;
    @media (max-width: 1200px) {
        top: 15%;
        transform: ${props => props.fish ? "rotate(-25deg)" : "rotate(-10deg)"};
        width: 41%;
    }
`, FishL = styled.img`
    position: absolute;
    transform: ${props => props.fish ? "rotate(0deg)" : "rotate(-20deg)"};    
    left: -24%;
    bottom: -1%;
    transition: .5s all;
    @media (max-width: 1200px) {
        width: 41%;
    }
`, Button = styled.button`
    width: 250px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: #11009e;
    font-size: 23px;
    color: #f3f3f3;
    font-weight: bold;
    text-align: center;
    margin: 50px auto 0;
    transition: .5s all;
    &:hover {
        background-color: #ADC7EF; /* Цвет при наведении с измененной прозрачностью */
    }
`
export default class Order extends Component {
    constructor() {
        super();
        this.state = {
            fish:false
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ fish: true });
        }, 1000); // интервал для установки fish в true

        setInterval(() => {
            this.setState({ fish: false });
        }, 2000); // интервал для установки fish в false
    }

    render() {
        return(
            <OrderSection id='delivery'>
                <Heading>
                    Order delicious
                </Heading>
                <Subheading>
                    Choose a date and time and our managers will contact <br/> you to complete the order
                </Subheading>
                <InputsWrapper>
                        <InputText type="text" placeholder="Type your name" />
                    <SelectWrapper>
                        <Select name="pets" id="pet-select">
                            <option value="">Choose a date</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </Select>
                        <SelectArrow src={arrow} alt=""/>
                    </SelectWrapper>
                        <InputText type="text" placeholder="Type your phone" />
                    <SelectWrapper>
                        <Select name="pets" id="pet-select">
                            <option value="">Choose a time</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </Select>
                        <SelectArrow src={arrow} alt=""/>
                    </SelectWrapper>
                </InputsWrapper>
                <FishR src={fish} alt="Image 1" fish={this.state.fish}/>
                <FishL src={fish} alt="Image 1" fish={this.state.fish}/>
                <Button>make an order</Button>
            </OrderSection>
        )
    }
}