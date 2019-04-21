import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AlignCenter from '../components/AlignCenter'
import { Button } from 'antd';
import { fadeInUp } from 'react-animations'
// images 
import icon_x from '../images/ico-x.png'
import ReactGA from 'react-ga';
ReactGA.pageview("/#coming-soon");

const TextFade = keyframes`${fadeInUp}`;

const Body = styled.div`
    max-width: 1180px;
    width: 100%;
    margin:auto;
    display: flex;
    height: 100%;
`
const Container = styled.div`
    width: 90%;
    max-width: 1180px;
    height: 80vh;
    max-height: 620px;
    background-color: #f9f9f9;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
`
const BtnWrapper = styled.div`
    text-align:center;
    opacity:1;
    // animation: ${TextFade} 1s ease forwards;
    animation-delay: 1.8s;
`
const SubTitle = styled.p`
    text-align:center;
    opacity:1;
    // animation: ${TextFade} 1s ease forwards;
    color: rgb(50,50,50);
    margin-bottom: 10px;
    font-size:20px;
    ${props => props.first && css`
        animation-delay: 0s;
        color: #6648b5;
        font-family: 'Spoqa Han Sans';
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 24px;
        text-indent: 24px;
    `}
    ${props => props.second && css`
        animation-delay: 1.2s;
        font-family: 'Montserrat';
        font-size: 24px;
        font-weight: 900;
        color: #333333;
        margin-bottom:0px;
    `}
    ${props => props.third && css`
        animation-delay: 1.8s;
        font-family: 'Montserrat';
        font-size: 24px;
        font-weight: 900;
        color: #6648b5;
    `}
    @media(max-width:768px){
        font-size: 16px;
    }
`
const Hr = styled.div`
    margin: 16px auto;
    animation-delay: 5s;
    // animation: ${TextFade} 3s ease forwards;
    width: 40px;
    height: 1.2px;
    background-color: #00cdbd;
`
const Title = styled.p`
    opacity:1
    margin-top: 40px;
    // animation: ${TextFade} 1.4s ease forwards;
    animation-delay: .5s;
    font-family: 'Spoqa Han Sans';
    font-size: 48px;
    font-weight: 100;
    line-height: 1.21;
    text-align: center;
    color: #333333;
    @media(max-width:768px){
        font-size: 26px;
    }
`
const Wrapper = styled(AlignCenter)`
    text-align: center !important;
`
const JoinBtn = styled(Button)`
    margin-top: 48px;
    max-width: 320px;
    width:80%;
    height: 56px !important;
    border-radius: 28px !important;
    font-weight: bold !important;
    color: #6648b5 !important;
    border-color: #6648b5 !important;
    :hover {
        background: #6648b5 !important;
        color: #FFF !important;
    }                     
`
const Xicon = styled.div`
    opacity:1;
    width: 32px;
    height: 32px;  
    background-image: url(${icon_x});
    margin:10px auto;
    // animation: ${TextFade} 1s ease forwards;
    animation-delay: 1.5s;
`

class ComingSoonPage extends Component {
    Joinus(){
        ReactGA.event({
            category: '버튼클릭',
            action: '사전회원가입 버튼',
        });
        window.location.href="https://forms.gle/5RGCPmPgLrMSRHwn6"
    }
    render() {
        return (
            <Body>
                <Container>
                    <Wrapper>
                        <SubTitle first>
                            핑퐁포펫
                        </SubTitle>
                        <Hr/>
                        <Title>
                            당신의 펫을 위한<br/>
                            기분좋은 <b>핑퐁</b>
                        </Title>
                        <SubTitle second>
                            COMING SOON
                        </SubTitle>
                        <Xicon/>
                        <SubTitle third>
                            For Your Pet
                        </SubTitle>
                        <BtnWrapper>
                            <JoinBtn size="default" ghost onClick={this.Joinus} index={this.props._index}>사전 회원가입</JoinBtn>            
                        </BtnWrapper>
                    </Wrapper>
                </Container>
            </Body>
        );
    }
}

export default ComingSoonPage;
