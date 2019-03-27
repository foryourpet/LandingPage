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
`
class MainPage extends Component {
  render() {
    return (
        <AlignCenter full>
            <SubTitle first>
            #동물병원 #호텔링 #미용 #목욕
            </SubTitle>
            <Title>
                <b>핑퐁퐁퐁</b><br/> 이 소리는 당신의 반려동물에게 필요한 찰떡궁합 서비스를 찾는 소리입니다.
            </Title>
            <SubTitle second>
                DO PINGPONG FOR YOUR PET
            </SubTitle>
            <BtnWrapper>
                <ArrowBtn type="primary" shape="circle" icon="arrow-down" size="large" onClick={() => this.props._fullpageApi.moveSectionDown()}/>
            </BtnWrapper>
        </AlignCenter>
    );
  }
}

export default MainPage;
