import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Row, Col } from 'antd';
import { fadeInUp } from 'react-animations'

// images
import center from '../images/center.jpg'
import ReactGA from 'react-ga';
ReactGA.pageview("/#about-center");

const TextFade = keyframes`${fadeInUp}`;

const ColLeft = styled(Col)`
  height: 100vh;
  background: rgb(245, 245, 245);
  @media(max-width:768px){
    height: 50vh;
    padding-top: 20px;
  }
`
const ColRight = styled(Col)`
  height: 100vh;
  background: rgb(255, 255, 255);
  @media(max-width:768px){
    height: 50vh;
  }
`
const ImageWrapper = styled.div`
    background-image:url(${center});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
`
const SubTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #6648b5;
  @media(max-width:768px){
    font-size: 12px;
    margin-bottom: 0px;
  }
`
const Title = styled.p`
  font-size: 48px;
  margin-bottom: 5px;
  font-weight: 100;
  color: #333333;
  line-height: 1.21;
  font-family: 'Spoqa Han Sans';
  @media(max-width:768px){
    font-size: 35px;
  }
`
const Content = styled.p`
  margin-top: 40px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #666666;
  @media(max-width:768px){
    font-size: 13px;
    margin-top: 15px;
    letter-spacing: -0.4px;
  }
`
const Hr = styled.div`
    animation-delay: 5s;
    animation: ${TextFade} 3s ease forwards;
    margin-top:24px;
    width: 40px;
    height: 1.2px;
    background-color: #00cdbd;
    @media(max-width:768px){
      margin-top: 10px;
    }
`
class AboutCustomerPage extends Component {
  render() {
    const { _index, _before } = this.props
    return (
        <Row>
          <ColLeft md={12} sm={24}>
            <AlignCenter>
              <Title>지금<br/><b>퐁</b>해주세요</Title>
              <Hr/>
              <Content>
              당신의 서비스를 어떻게 알릴지 더이상 힘들게 고민하지 마세요.<br/>
              이제 단지 핑하면 퐁해주세요.
              </Content>
              <SubTitle>#수의사 #강아지호텔 #고양이호텔 #강아지미용사 #펫미용</SubTitle>
            </AlignCenter>
          </ColLeft>
          <ColRight md={12} sm={24}>
            <ImageWrapper/>
          </ColRight>
        </Row>
    );
  }
}

export default AboutCustomerPage;
