import React, { Component } from 'react';
import styled, { css, keyframes} from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Button, Row, Col } from 'antd';

import about from '../images/about_1.png'

const fromTop = keyframes`
  0% {
    opacity:0
    transform: rotate(20deg);
  }
  100% {
    opacity:1
    transform: rotate(0deg);
  }
`
const fromBottom = keyframes`
  0% {
    opacity:0
    transform: rotate(-20deg);
  }
  100% {
    opacity:1
    transform: rotate(0deg);
  }
`
const toTop = keyframes`
  0% {
    opacity:1
    transform: rotate(0deg);
  }
  100% {
    opacity:0
    transform: rotate(20deg);
  }
`
const toBottom = keyframes`
  0% {
    opacity:1
    transform: rotate(0deg);
  }
  100% {
    opacity:0
    transform: rotate(-20deg);
  }
`
const ColLeft = styled(Col)`
  height: 100vh;
  background: rgb(255, 255, 255);
  @media(max-width:768px){
    height: 50vh;
  }
`
const ColRight = styled(Col)`
  height: 100vh;
  background: rgb(0, 205, 189);
  @media(max-width:768px){
    height: 50vh;
  }
`
const ImageWrapper = styled.div`
    margin-top: 40vh;
    text-align: center;
    @media(max-width:768px){
        margin-top: 0;
    }
`
const Image = styled.img`
    z-index:-1;
    width:60vh;
    opacity:0;
    @media(max-width:768px){
      width: 60vh;
    }
    ${props => props.fromTop && css`
        animation: ${fromTop} 1s ease-out forwards;
    `}
    ${props => props.fromBottom && css`
        animation: ${fromBottom} 1s ease-out forwards;
    `}
    ${props => props.toTop && css`
        animation: ${toTop} 1s ease-out forwards;
    `}
    ${props => props.toBottom && css`
        animation: ${toBottom} 1s ease-out forwards;
    `}
`

const SubTitle = styled.p`
    margin: 0px;
    margin-top:10px;
    font-size: 18px;
    color: rgb(150,150,150);
    @media(max-width:768px){
      font-size: 16px;
    }
`
const Title = styled.p`
  font-size: 35px;
  margin-bottom: 5px;
  color: rgb(50,50,50);
  font-weight: 400;
  b {
      font-weight: 400;
      color: rgb(102, 72, 181);
  }
  @media(max-width:768px){
    font-size: 26px;
  }
`
const Content = styled.p`
    font-size: 18px;
    color: rgb(50, 50, 50);
    @media(max-width:768px){
      font-size: 16px;
    }
`
class AboutCenterPage extends Component {
    render() {
        const { _index, _before } = this.props
        return (
            <Row>
            <ColLeft md={12} sm={24}>
                <AlignCenter>
                  <Title>지금 <b>핑</b>해주세요</Title>
                  <SubTitle>#동물병원 #호텔링 #미용 #목욕</SubTitle>
                  <Content>
                    반려동물에게 필요한 서비스를 찾고있다면 지금 핑해주세요. 한마디 핑에 다섯마디 퐁으로 포펫이 답해드려요.
                  </Content>
                </AlignCenter>
            </ColLeft>
            <ColRight md={12} sm={24}>
                <ImageWrapper>
                    <Image 
                    fromTop={_index===2 && _before==="main" ? true : false}
                    fromBottom={_index===2 && _before==="about-customer" ? true : false} 
                    toTop={_index===1 ? true : false}
                    toBottom={_index===3 ? true : false} src={about}/>
                </ImageWrapper>
            </ColRight>
            </Row>
        );
    }
}

export default AboutCenterPage;
