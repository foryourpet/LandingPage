import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import about from '../images/about_1.png'
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
      animation: ${fromTop} 1s ease-out forwards;
  `}
  ${props => props.toTop && css`
      animation: ${toTop} 1s ease-out forwards;
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
              <Title>AboutPage 페이지 입니다.<b>포팻(ForYourPet)</b>에 대해 설명해주세요.</Title>
              <SubTitle>반갑습니다^^ 포펫입니다.</SubTitle>
              <Content>
                  여기에는 내용을 적어주세요. 어떤 내용이 들어가면 좋을까요..
              </Content>
            </AlignCenter>
          </ColRight>
        </Row>
    );
  }
}

export default AboutCustomerPage;
