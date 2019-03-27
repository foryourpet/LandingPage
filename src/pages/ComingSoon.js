import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Button } from 'antd';
import { fadeInUp } from 'react-animations'

const TextFade = keyframes`${fadeInUp}`;
const ArrowMove = keyframes`
    0% {
        margin-top: 0;
    }
    50%{
        margin-top: 7px;
    }
    100% {
        margin-top: 0;
    }
`
const BtnWrapper = styled.div`
    text-align:center;
    opacity:0
    animation: ${TextFade} 1s ease forwards;
    animation-delay: 1.8s;
`
const ArrowBtn = styled(Button)`
    position: absolute !important;
    background: rgb(102, 72, 181) !important;
    border-color: rgb(102, 72, 181) !important;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5) !important;
    animation: ${ArrowMove} 1.5s ease-out infinite;
    
`
const SubTitle = styled.p`
    text-align:center;
    opacity:0
    animation: ${TextFade} 1s ease forwards;
    color: rgb(150,150,150);
    margin-bottom: 10px;
    ${props => props.first && css`
        animation-delay: 0s;
    `}
    ${props => props.second && css`
        animation-delay: 1.2s;
    `}
`
const Title = styled.p`
    text-align:center;
    opacity:0
    animation: ${TextFade} 1.4s ease forwards;
    animation-delay: .5s;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgb(50,50,50);
    font-weight: 600;
    b {
        color: rgb(102, 72, 181);
    }
    @media(max-width:768px){
        font-size: 26px;
    }
`
const Wrapper = styled(AlignCenter)`
    text-align: center !important;
`
const JoinBtn = styled(Button)`
    border-radius: 50px !important;
    font-weight: bold !important;
    color: #6648b5 !important;
    border-color: #6648b5 !important;
    :hover {
        background: #6648b5 !important;
        color: #FFF !important;
    }                     
`
class ComingSoonPage extends Component {
  render() {
    return (
        <Wrapper>
            <SubTitle first>
                핑퐁포펫
            </SubTitle>
            <Title>
                당신의 펫을 위한 기분 좋은<br/><b>핑퐁</b>
            </Title>
            <SubTitle second>
                COMING SOON
            </SubTitle>
            <BtnWrapper>
            <JoinBtn size="default" ghost onClick={this.Joinus} index={this.props._index}>사전 회원가입</JoinBtn>            </BtnWrapper>
        </Wrapper>
    );
  }
}

export default ComingSoonPage;
