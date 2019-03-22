import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Layout } from 'antd';
import './App.css';

// components
import HaederComponent from './components/header'
import IndicatorComponent from './components/indicator'
import SocialComponent from './components/social'

// pages
import MainPage from './pages/Main'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'


class App extends Component {
  constructor(){
    super()
    this.onLeave  = this.onLeave .bind(this)
    this.state = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ["main", "about", "contact"],
      sectionsColor: ["#FFF", "#FFF", "#FFF"],
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
    else if(anchor==="about"){
      indexNum = 2
    }
    else{
      indexNum = 3
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
        <HaederComponent/>
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
                  <AboutPage _index={this.state.index} _before={this.state.before}/>
                </div>
                <div className="section">
                  <ContactPage _index={this.state.index} _before={this.state.before}/>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Layout>
    );
  }
}

export default App;
