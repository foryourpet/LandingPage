import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Button } from 'antd';

const Header = styled.div`
    position: fixed;
    padding: .75rem;
    height: 60px;
    z-index: 1;
    width: 100%;
    background: #FFF0;
`
const Logo = styled.img`
    width: 140px;
`
const JoinBtn = styled(Button)`
    float: right;
    color: #6648b5 !important;
    border-color: #6648b5 !important;
    border-radius: 50px !important;
    font-weight: bold !important;
    :hover {
        background: #6648b5 !important;
        color: #FFF !important;
    }
`


class HaederComponent extends Component {
  render() {
    return (
        <Header>
            <Logo src={logo}/>
            <JoinBtn size="default" ghost>Join Us</JoinBtn>
        </Header>
    );
  }
}

export default HaederComponent;
