import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Layout } from 'antd';
import styled from 'styled-components';
import './App.css';


// images 
import coming_soon from './images/coming_soon_1.png'

// components
import HaederComponent from './components/header'
import IndicatorComponent from './components/indicator'
import SocialComponent from './components/social'

// pages
import MainPage from './pages/Main'
import AboutCenterPage from './pages/About_Center'
import AboutCustomerPage from './pages/About_Customer'
import AboutOtherPage from './pages/About_Other'
import ComingSoonPage from './pages/ComingSoon'

const ComingSection = styled.div`
  background-image: url(${coming_soon});
  background-size: cover;
  background-position: center;
`
class App extends Component {
  constructor(){
    super()
    this.onLeave  = this.onLeave.bind(this)
    this.state = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ["main", "about-center", "about-customer", "about-other", "coming-soon"],
      sectionsColor: ["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
      callbacks: ["onLeave"],
      dragAndMove: "fingersonly",
      fadingEffect: true,
      slidesNavigation: true,
      slidesNavPosition: 'right',
      onLeave :this.onLeave ,
      index: 1,
      before: null
    }  
  }
  onLeave (origin, destination, direction){
    const anchor = destination.anchor
    var indexNum = null
    if(anchor==="main"){
      indexNum = 1
    }
    else if(anchor==="about-center"){
      indexNum = 2
    }
    else if(anchor==="about-customer"){
      indexNum = 3
    }
    else if(anchor==="about-other"){
      indexNum = 4
    }
    else{
      indexNum = 5
    }
    this.setState({
      index : indexNum,
      before: origin.anchor
    })
  }
  render() {
    const { ...fullpageOptions } = this.state
    return (
      <Layout>
        <HaederComponent _index={this.state.index}/>
        <IndicatorComponent _index={this.state.index}/>
        <SocialComponent/>
        <ReactFullpage
          {...fullpageOptions}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <MainPage _fullpageApi={fullpageApi}/>
                </div>
                <div className="section">
                  <AboutCenterPage _index={this.state.index} _before={this.state.before}/>
                </div>
                <div className="section">
                  <AboutCustomerPage _index={this.state.index} _before={this.state.before}/>
                </div>
                <ComingSection className="section">
                  <ComingSoonPage _index={this.state.index} _before={this.state.before}/>
                </ComingSection>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Layout>
    );
  }
}

export default App;
