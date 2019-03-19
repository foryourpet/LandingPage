import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const SocialWrapper = styled.ol`
    position: absolute;
    bottom: 10px;
    right:10px;
    z-index: 1;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    margin: 0px;
    display: block;
`
const Social = styled.li`
    opacity: 1 !important;
    margin: 10px;
`
const SocialIcon = styled(Icon)`
    font-size: 20px;
`


class SocialComponent extends Component {
  render() {
        return (
            <SocialWrapper>
                <Social>
                    <SocialIcon type="facebook" />
                </Social>
                <Social>
                    <SocialIcon type="instagram" />
                </Social>
            </SocialWrapper>
        );
    }
}

export default SocialComponent;
