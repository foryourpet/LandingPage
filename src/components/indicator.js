import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
// images
import ico_dot_hover from '../images/ico-dot-hover.png'
import ico_dot_select from '../images/ico-dot-select.png'

const indicateWidth = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
const IndicatorWrapper = styled.ol`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    padding-left: 0;
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
    width: 10px;
    height: 10px;
    margin: 20px 10px;
    background-image: url(${ico_dot_hover});
    animation-iteration-count: 1;
    ${props => props.active && css`
      background-image: url(${ico_dot_select});
      animation: ${indicateWidth} .5s ease-out forwards;
    `}
`


class IndicatorComponent extends Component {
  render() {
      const { _index } = this.props
        return (
            <IndicatorWrapper style={{marginLeft: '1rem'}}>
                <Indicator active={_index===1 ? true : false}></Indicator>
                <Indicator active={_index===2 ? true : false}></Indicator>
                <Indicator active={_index===3 ? true : false}></Indicator>
                <Indicator active={_index===4 ? true : false}></Indicator>
            </IndicatorWrapper>
        );
    }
}

export default IndicatorComponent;
