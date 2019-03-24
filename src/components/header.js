import React, { Component } from 'react';
import styled, { css } from 'styled-components';
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
    cursor: pointer;
`
const JoinBtn = styled(Button)`
    float: right;
    border-radius: 50px !important;
    font-weight: bold !important;
    ${props => (props.index===1 || props.index===3 || props.index===5) && css`
        color: #6648b5 !important;
        border-color: #6648b5 !important;
        :hover {
            background: #6648b5 !important;
            color: #FFF !important;
        }
    `}
    ${props => (props.index===2 || props.index===4) && css`
        color: #FFF !important;
        border-color: #FFF !important;
        :hover {
            background: #FFF !important;
            color: #555 !important;
        }
    `}
`

class HaederComponent extends Component {
    Joinus(){
        window.location.href="https://goo.gl/forms/HU9PV9QY8zHYX7rh2"
    }
    render() {
        return (
            <Header>
                <Logo src={logo} onClick={() => window.location.href='#main'}/>
                <JoinBtn size="default" ghost onClick={this.Joinus} index={this.props._index}>사전 회원가입</JoinBtn>
            </Header>
        );
    }
}

export default HaederComponent;
