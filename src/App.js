import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Layout } from 'antd';
import './App.css';

// components
import HaederComponent from './components/header'
import IndicatorComponent from './components/indicator'
import SocialComponent from './components/social'
class App extends Component {
  constructor(){
    super()
    this.onLeave  = this.onLeave .bind(this)
    this.state = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ["main", "about", "contact"],
      sectionsColor: ["#FFF", "#ff5f45", "#0798ec"],
      callbacks: ["onLeave"],
      dragAndMove: "fingersonly",
      fadingEffect: true,
      slidesNavigation: true,
      slidesNavPosition: 'right',
      onLeave :this.onLeave ,
      index: 1
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
      index : indexNum
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
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section">
                  <p>Section 2</p>
                </div>
                <div className="section">
                  <p>Section 2</p>
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
