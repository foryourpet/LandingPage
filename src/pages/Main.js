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
                #반려인들 바글바글 #핑퐁 #수의사비밀보장 #시간단축 #거리단축 #동물병원자랑
            </SubTitle>
            <Title>
                여러분의 동물병원 마케팅은 <b>포펫</b>에게 맞겨주세요!
            </Title>
            <SubTitle second>
                반려인들 요청에 맞춰 예상 진료비와 병원소개를 해주세요^^
            </SubTitle>
            <BtnWrapper>
                <ArrowBtn type="primary" shape="circle" icon="arrow-down" size="large" onClick={() => this.props._fullpageApi.moveSectionDown()}/>
            </BtnWrapper>
        </AlignCenter>
    );
  }
}

export default MainPage;
