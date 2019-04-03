import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const SocialWrapper = styled.ol`
    position: absolute;
    bottom: 0;
    right:0;
    z-index: 1;
    padding-left: 0;
    list-style: none;
    display: block;
    margin: 2rem 1.5rem;
`
const Social = styled.li`
    opacity: 1 !important;
    margin-top: 10px;
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
