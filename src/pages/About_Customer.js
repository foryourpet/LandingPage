import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import about from '../images/about_2.png'
import { fadeInUp, fadeOutDown } from 'react-animations'

const fromTop = keyframes`${fadeInUp}`;
const toTop = keyframes`${fadeOutDown}`;

const ColLeft = styled(Col)`
  height: 100vh;
  background: rgb(245, 245, 245);
  @media(max-width:768px){
    height: 50vh;
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
  ${props => props.toTop && css`
      animation: ${toTop} 1s ease-out forwards;
  `}
`
const SubTitle = styled.p`
  font-size: 18px;
  margin: 0px;
  margin-top:10px;
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
class AboutCustomerPage extends Component {
  render() {
    const { _index, _before } = this.props
    return (
        <Row>
          <ColLeft md={12} sm={24}>
            <ImageWrapper>
              <Image 
                fromTop={ _index===3 ? true : false}
                toTop={_index!=3 ? true : false} src={about}/>
            </ImageWrapper>
          </ColLeft>
          <ColRight md={12} sm={24}>
            <AlignCenter>
              <Title>지금 <b>퐁</b>해주세요</Title>
              <SubTitle>#수의사 #강아지호텔 #고양이호텔 #강아지미용사 #펫미용</SubTitle>
              <Content>
              당신의 서비스를 어떻게 알릴지 더이상 힘들게 고민하지 말아요. 이제 단지 핑하면 퐁해주세요.
              </Content>
            </AlignCenter>
          </ColRight>
        </Row>
    );
  }
}

export default AboutCustomerPage;
