import React from 'react';
import {Component} from "react";
import styled from "styled-components";

import line from '../../assets/images/line.svg'
import arrow from '../../assets/icons/arrow-input.png'

const SectionPosition = styled.div`
    height: 1697px;
    position: relative;
    padding-top: 460px;
`, Line = styled.img`
    position: absolute;
    width: 112%;
    top: 300px;
    left: -6%;
`, Title = styled.h2`
    display: inline;
    font-size: 30px;
    font-weight: 600;
`,
    Select = styled.select`
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
    top: 5%;
    left: 90%;
    z-index: -5;
`, SelectWrapper = styled.div`
    margin-left: 50%;
    position: relative;
    display: inline;
`
export default class TopPositions extends Component {
    render() {
        return(
            <SectionPosition>
                <Line src={line} alt=""/>
                    <Title>This month's top positions</Title>
                    <SelectWrapper>
                        <Arrow src={arrow} alt=""/>
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
            </SectionPosition>
        )
    }
}