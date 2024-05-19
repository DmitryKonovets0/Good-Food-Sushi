import React, { Component } from 'react';
import styled from 'styled-components';

import sushiBackground from '../../assets/images/bg-sushi.png';

const SushiBgSection = styled.section`
    margin-top: 120px;
    height: 683px;
    position: relative;
    background: url(${sushiBackground}) center center /cover no-repeat;
`
export default class SushiBg extends Component {
    render() {
        return(
            <SushiBgSection/>
        )
    }
}