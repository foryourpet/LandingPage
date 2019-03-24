import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

const indicateWidth = keyframes`
  0% {
    width: 18px;
    background: #DDD;
  }
  100% {
    width: 28px;
    background: #6648b5;
  }
`
const IndicatorWrapper = styled.ol`
    position: absolute;
    bottom: 0;
    z-index: 1;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    margin: 0px;
    display: block;
    top: 45%;
    @media (max-width: 768px) {
      display:none;
    }
`
const Indicator = styled.li`
    opacity: 1 !important;
    width: 18px;
    height: 2px;
    margin: 10px;
    background: #DDD;
    animation-iteration-count: 1;
    ${props => props.active && css`
        animation: ${indicateWidth} .5s ease-out forwards;
    `}
`


class IndicatorComponent extends Component {
  render() {
      const { _index } = this.props
        return (
            <IndicatorWrapper>
                <Indicator active={_index===1 ? true : false}></Indicator>
                <Indicator active={_index===2 ? true : false}></Indicator>
                <Indicator active={_index===3 ? true : false}></Indicator>
                <Indicator active={_index===4 ? true : false}></Indicator>
                <Indicator active={_index===5 ? true : false}></Indicator>
            </IndicatorWrapper>
        );
    }
}

export default IndicatorComponent;
