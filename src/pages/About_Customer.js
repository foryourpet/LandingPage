import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Row, Col } from 'antd';
import { fadeInUp } from 'react-animations'

// images
import customer from '../images/customer.jpg'
import ReactGA from 'react-ga';
ReactGA.pageview("/#about-customer");

const TextFade = keyframes`${fadeInUp}`;

const ColLeft = styled(Col)`
  height: 100vh;
  background: rgb(245, 245, 245);
  display:block !important;
  @media(max-width:768px){
    display:none !important;
  }
`
const ColImg = styled(Col)`
  display:none;
  @media(max-width:768px){
    height: 50vh;
  }
`
const ColRight = styled(Col)`
  height: 100vh;
  background: rgb(255, 255, 255);
  @media(max-width:768px){
    height: 50vh;
    padding-bottom: 20px;
  }
`
const ImageWrapper = styled.div`
    background-image:url(${customer});
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
            <ImageWrapper/>
          </ColLeft>
          <ColRight md={12} sm={24}>
            <AlignCenter>
              <Title>지금<br/><b>핑</b>해주세요</Title>
              <Hr/>
              <Content>
                반려동물에게 필요한 서비스를 찾고있다면 지금 핑해주세요.<br/>
                한마디 핑에 다섯마디 퐁으로 포펫이 답해드려요.
              </Content>
              <SubTitle>#수의사 #강아지호텔 #고양이호텔 #강아지미용사 #펫미용</SubTitle>
            </AlignCenter>
          </ColRight>
          <ColImg md={12} sm={24}>
            <ImageWrapper/>
          </ColImg>
        </Row>
    );
  }
}

export default AboutCustomerPage;
