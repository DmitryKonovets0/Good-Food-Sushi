import React, { Component } from 'react';
import styled from 'styled-components';

import sushiBackground from '../../assets/images/bg-sushi.png';

const SushiBgSection = styled.div`
    margin-top: 300px;
    height: 577px;
    width: 100%;
    left: 0;
    position: absolute;
    background: url(${sushiBackground}) center center /cover no-repeat;
`
export default class SushiBg extends Component {
    render() {
        return(
            <SushiBgSection/>
        )
    }
}