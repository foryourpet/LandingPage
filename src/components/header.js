import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from '../images/logo.png';
import { Button } from 'antd';
import ReactGA from 'react-ga';

const Header = styled.div`
    position: fixed;
    padding: 2rem 1.5rem;
    height: 75px;
    z-index: 1;
    width: 100%;
    background: #FFF0;
    align-self: center;
    @media(max-width:768px){
        padding: 1rem;
    }
`
const Logo = styled.img`
    width: 140px;
    cursor: pointer;
`
const JoinBtn = styled(Button)`
    float: right;
    border-radius: 50px !important;
    font-weight: bold !important;
    @media(max-width:768px){
        ${props => (props.index===2) && css`
            color: #6648b5 !important;
            border-color: #6648b5 !important;
            :hover {
                background: #6648b5 !important;
                color: #FFF !important;
            }
        `}
    }
    ${props => (props.index===1 || props.index===2 || props.index===3) && css`
        color: #6648b5 !important;
        border-color: #6648b5 !important;
        :hover {
            background: #6648b5 !important;
            color: #FFF !important;
        }
    `}
    ${props => (props.index===4) && css`
        display:none !important;
    `}
`

class HaederComponent extends Component {
    Joinus(){
        ReactGA.event({
            category: '버튼클릭',
            action: '사전회원가입 버튼',
        });
        window.location.href="https://forms.gle/5RGCPmPgLrMSRHwn6"
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
