import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Button } from 'antd';
import { fadeInUp } from 'react-animations'
// images 
import main_img from '../images/main.png'

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
    animation: ${TextFade} 1s ease forwards;
    animation: ${ArrowMove} 1.5s ease-out infinite;
`
const SubTitle = styled.p`
    opacity:0
    animation: ${TextFade} 1s ease forwards;
    color: rgb(150,150,150);
    margin-bottom: 10px;
    font-size: 18px;
    ${props => props.first && css`
        animation-delay: 0s;
    `}
    ${props => props.second && css`
        animation-delay: 1.2s;
    `}
    @media(max-width:768px){
        font-size: 16px;
    }
`
const Title = styled.p`
    opacity:0
    animation: ${TextFade} 1.4s ease forwards;
    animation-delay: .5s;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgb(50,50,50);
    font-weight: 400;
    b {
        color: rgb(102, 72, 181);
        font-weight: 400;
        font-size: 40px;
    }
    @media(max-width:768px){
        font-size: 24px;
        b{
            font-size: 30px;
        }
    }
`
const MainWrapper = styled.div`
width: 60%;
float: left;
position: relative;
z-index: 1;
@media(max-width:768px){
    width: 100%;
}
`
const MainImg = styled.img`
position: absolute;
bottom: 0;
height: 80vh;
right: 0;
@media(min-width:1100px){
    margin-right: 10%;
}
@media(min-width:1400px){
    margin-right: 15%;
}
@media(min-width:1800px){
    margin-right: 20%;
}
`
class MainPage extends Component {
  render() {
    return (
        <AlignCenter full>
            <MainWrapper>
                <SubTitle first>
                DO PINGPONG
                </SubTitle>
                <Title style={{marginBottom:0}}>
                    <b>핑퐁퐁퐁</b>
                </Title>
                <Title>
                    이 소리는 당신의 반려동물에게 필요한 찰떡궁합 서비스를 찾는 소리입니다.
                </Title>
                <SubTitle second>
                    DO PINGPONG FOR YOUR PET
                </SubTitle>
                {/* <BtnWrapper>
                    <ArrowBtn type="primary" shape="circle" icon="arrow-down" size="large" onClick={() => this.props._fullpageApi.moveSectionDown()}/>
                </BtnWrapper> */} 
            </MainWrapper>
            <MainImg src={main_img}/>
        </AlignCenter>
    );
  }
}

export default MainPage;
