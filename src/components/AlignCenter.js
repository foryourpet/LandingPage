import React, { Component } from 'react';
import styled from 'styled-components';

const FullOuter = styled.div`
    display: table;
    height: 100%;
    width: 85%;
    text-align: left;
    margin:auto;
    max-width: 1000px;
`
const HalfOuter = styled.div`
    display: table;
    height: 100%;
    width: 70%;
    text-align: left;
    margin:auto;
    max-width: 435px;
    @media(max-width:768px){
        width: 90%;
    }
`
const Middle = styled.div`
    display: table-cell;
    vertical-align: middle;
`
const Inner = styled.div`
    margin-left: auto;
    margin-right: auto;
`

class AlignCenter extends Component {
  render() {
    return (
        (
            this.props.full
            ? (
                <FullOuter>
                    <Middle>
                        <Inner>
                            {this.props.children}
                        </Inner>
                    </Middle>
                </FullOuter>
            )
            :   (
                <HalfOuter>
                    <Middle>
                        <Inner>
                            {this.props.children}
                        </Inner>
                    </Middle>
                </HalfOuter>
            )
        )
    );
  }
}

export default AlignCenter;
