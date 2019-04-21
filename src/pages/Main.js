import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Row, Col } from 'antd';
import { fadeInUp } from 'react-animations'

// images 
import main_img from '../images/main.jpg'
import ReactGA from 'react-ga';
ReactGA.pageview("/#main");

const TextFade = keyframes`${fadeInUp}`;
const SubTitle = styled.p`
    opacity:1
    // animation: ${TextFade} 1s ease forwards;
    color: rgb(150,150,150);
    font-size: 18px;
    @media(max-width:768px){
        font-size: 16px;
    }
    ${props => props.first && css`
        animation-delay: 0s;
        color: #6648b5;
        line-height: 1.5;
        font-size: 17px;
        font-family: 'Montserrat';
        font-weight: 900;
        margin-bottom: 15px;
        @media(max-width:768px){
            display:none;
        }
    `}
    ${props => props.second && css`
        animation-delay: 1s;
        margin-bottom: 10px;
        margin-top: 40px;
        font-family: 'Spoqa Han Sans';
        font-size: 18px;
        font-weight: bold;
        line-height: 1.63;
        letter-spacing: 16px;
        color: #6648b5;
        @media(max-width:768px){
            margin-top: 15px;
            margin-bottom: 5px;
            font-size: 15px;
        }
    `}
    ${props => props.third && css`
        animation-delay: 1.5s;
        margin-bottom: 10px;
        font-family: 'Spoqa Han Sans';
        font-size: 18px;
        line-height: 1.63;
        color: #666666;
        @media(max-width:1110px){
            font-size: 15px;
        }
        @media(max-width:768px){
            font-size: 13px;
            margin-bottom: 0px;
        }
    `}
`
const Title = styled.p`
    opacity:1
    // animation: ${TextFade} 1.4s ease forwards;
    animation-delay: .5s;
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 30px;
    color: rgb(50,50,50);
    font-weight: 400;
    font-family: 'Montserrat';
    b {
        font-size: 52px;
        font-weight: 900;
        color: #333333;
        margin-top:20px;
    }
    @media(max-width:1110px){
        b{
            font-size: 36px;
        }
    }
    @media(max-width:768px){
        b{
            line-height: 10px;
            font-size: 35px;
        }
    }
`
const ColLeft = styled(Col)`
  height: 100vh;
  background-color: rgb(255, 255, 255);
  @media(max-width:768px){
    height: 50vh;
    padding-top: 20px;
  }
`
const ColRight = styled(Col)`
  height: 100vh;
  background-color: #f1f1f1;
  @media(max-width:768px){
    height: 50vh;
  }
`
const Hr = styled.div`
    animation-delay: 5s;
    animation: ${TextFade} 3s ease forwards;
    width: 24px;
    height: 1.2px;
    background-color: #00cdbd;
    @media(max-width:768px){
        display:none;
    }
`
const ImageWrapper = styled.div`
    background-image:url(${main_img});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
`
class MainPage extends Component {
  render() {
    return (
        <Row>
            <ColLeft md={12} sm={24}>
                <AlignCenter>
                    <SubTitle first>
                        Hey!<br/>
                        There
                    </SubTitle>
                    <Hr/>
                    <Title style={{marginBottom:0}} first>
                        <b>Do Ping Pong<br/>For Your Pet</b>
                    </Title>
                    <SubTitle second>
                        핑·퐁·퐁·퐁
                    </SubTitle>
                    <SubTitle third>
                        이 소리는 당신의 반려동물에게 필요한<br/>찰떡궁합 서비스를 찾는 소리입니다.
                    </SubTitle>
                </AlignCenter>
            </ColLeft>
            <ColRight md={12} sm={24}>
                <ImageWrapper/>
            </ColRight>
        </Row>
    );
  }
}

export default MainPage;
