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
    margin-top: 50vh;
    text-align: center;
    @media(max-width:768px){
        margin-top: 0;
    }
`
const Image = styled.img`
    z-index:-1;
    width:50vh;
    opacity:0;
    ${props => props.fromTop && css`
        animation: ${fromTop} 1.2s ease-out forwards;
    `}
    ${props => props.fromBottom && css`
        animation: ${fromBottom} 1.2s ease-out forwards;
    `}
    ${props => props.toTop && css`
        animation: ${toTop} 1.2s ease-out forwards;
    `}
    ${props => props.toBottom && css`
        animation: ${toBottom} 1.2s ease-out forwards;
    `}
`

const SubTitle = styled.p`
    margin: 0px;
    margin-top:10px;
    color: rgb(150,150,150);
`
const Title = styled.p`
    font-size: 30px;
    margin-bottom: 5px;
    color: rgb(50,50,50);
    font-weight: 600;
    b {
        color: rgb(102, 72, 181);
    }
`
const Content = styled.p`
    font-size: 16px;
    color: rgb(50, 50, 50);
`
class AboutPage extends Component {
    render() {
        const { _index, _before } = this.props
        return (
            <Row>
            <ColLeft md={12} sm={24}>
                <AlignCenter>
                    <Title>AboutPage 페이지 입니다.<b>포팻(ForYourPet)</b>에 대해 설명해주세요.</Title>
                    <SubTitle>반갑습니다^^ 포펫입니다.</SubTitle>
                    <Content>
                        여기에는 내용을 적어주세요. 어떤 내용이 들어가면 좋을까요..
                    </Content>
                </AlignCenter>
            </ColLeft>
            <ColRight md={12} sm={24}>
                <ImageWrapper>
                    <Image 
                    fromTop={_index===2 && _before==="main" ? true : false}
                    fromBottom={_index===2 && _before==="contact" ? true : false} 
                    toTop={_index===1 ? true : false}
                    toBottom={_index===3 ? true : false} src={about}/>
                </ImageWrapper>
            </ColRight>
            </Row>
        );
    }
}

export default AboutPage;
