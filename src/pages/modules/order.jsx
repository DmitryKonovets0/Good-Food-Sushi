import React, { Component } from 'react';
import styled from 'styled-components';

import fish from '../../assets/images/fish-order.svg'
import arrow from '../../assets/icons/arrow-input.png'
const OrderSection = styled.section`
    position: relative;
    height: 684px;
    padding-top: 40px;
    margin-top: 453px;
    padding-bottom: 95px;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Container = styled.div`
    width: 90%;
    margin: 0 auto;
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
    justify-content: center;
            grid-template-areas: 
  "name times"
  "phone date";
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 304px);
    } 
`,InputText = styled.input`
    width: 100%;
    font-size: 22px;
    height: 40px;
    border-radius: 40px;
    border: solid 1px #11009e;
    background-color: transparent;
    padding-left: 11px;
    color: #181818;
    &::placeholder {
        color: #181818;
        opacity: 1; /* Firefox */
    }
`,SelectWrapper = styled.div`
    position: relative;
`,
    Select = styled.select`
    width: 100%;
    font-size: 22px;
    height: 40px;
    border-radius: 40px;
    border: solid 1px #11009e;
    background-color: transparent;
    padding-left: 11px;
    color: #181818;
    -webkit-appearance: none;
    -moz-appearance: none;
`, SelectArrow = styled.img`
    position: absolute;
    top: 35%;
    right: 3%;
`, NameInput = styled(InputText)`
  grid-area: name;
`, PhoneInput = styled(InputText)`
  grid-area: phone;
`, TimeSelectWrapper = styled(SelectWrapper)`
  grid-area: times;
`, DateSelectWrapper = styled(SelectWrapper)`
  grid-area: date;
`, FishR = styled.img`
    position: absolute;
    //transform: ${props => props.fish ? "rotate(-20deg)" : "rotate(0deg)"};
    right: -20%;
    top: 13%;
    transition: .5s all;
    @media (max-width: 1200px) {
        top: 15%;
        transform: ${props => props.fish ? "rotate(-25deg)" : "rotate(-10deg)"};
        width: 41%;
    }
    @media (max-width: 992px) {
        top: 5%;
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
                <Container>
                    <Heading>
                        Order delicious
                    </Heading>
                    <Subheading>
                        Choose a date and time and our managers will contact <br/> you to complete the order
                    </Subheading>
                    <InputsWrapper>
                        <NameInput type="text" placeholder="Type your name" />
                        <PhoneInput type="text" placeholder="Type your phone" />
                        <TimeSelectWrapper>
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
                        </TimeSelectWrapper>
                        <DateSelectWrapper>
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
                        </DateSelectWrapper>
                    </InputsWrapper>
                    <FishR src={fish} alt="Image 1" fish={this.state.fish}/>
                    <FishL src={fish} alt="Image 1" fish={this.state.fish}/>
                    <Button>make an order</Button>
                </Container>
            </OrderSection>
        )
    }
}