import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import about from '../images/about_1.png'
import { fadeInUp, fadeOutDown } from 'react-animations'

const fromTop = keyframes`${fadeInUp}`;
const toTop = keyframes`${fadeOutDown}`;

// const fromTop = keyframes`
//   0% {
//     opacity:0
//     transform: rotate(20deg);
//   }
//   100% {
//     opacity:1
//     transform: rotate(0deg);
//   }
// `
// const toTop = keyframes`
//   0% {
//     opacity:1
//     transform: rotate(0deg);
//   }
//   100% {
//     opacity:0
//     transform: rotate(20deg);
//   }
// `
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
class ContactPage extends Component {
  render() {
    const { _index, _before } = this.props
    return (
        <Row>
          <ColLeft md={12} sm={24}>
            <ImageWrapper>
              <Image 
                fromTop={ _index===3 ? true : false}
                toTop={_index===2 ? true : false} src={about}/>
            </ImageWrapper>
          </ColLeft>
          <ColRight md={12} sm={24}>
            <AlignCenter>
              <Form>
                <Form.Item
                  label="E-mail"
                >
                  <Input size="large" />
                </Form.Item>
              </Form>
              {/* <form action="https://formspree.io/wkddnjset@naver.com" method="POST">
                <input type="email" name="_replyto" value="wkddnjset@naver.com" hidden/>
                <input type="text" name="title"/>
                <input type="text" name="content"/>
                <input type="submit" value="Send"/>
              </form> */}
            </AlignCenter>
          </ColRight>
        </Row>
    );
  }
}

export default ContactPage;
