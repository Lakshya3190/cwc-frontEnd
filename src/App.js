import React from 'react';
import './App.css';
import LandingPage from './components/landingPage/landingPage.js';
import FindService from './components/findService/findService.js';
import ProvideService from './components/provideService/provideService.js';
import VulnerabilityAnalysis from './components/vulnerabilityAnalysis/vulnerabilityAnalysis.js';
import Dashb from './components/dashboard/dashboard.js';
import RegisterShop from './components/registerShop/registerShop.js';
import Particles from 'react-particles-js';




class App extends React.Component{

  constructor(){
    super();
    this.state = {
      route: 'home',
    }
  }

onRouteChange = (route) => {
  this.setState({route: route});
}

  render(){
    return (
      <div className="App">

      <Particles className = 'particles' 
                        params={{
                          particles: {
                          number: {
                            value: 400,
                            density: {
                              enable: true,
                              value_area: 800
                            }
                          },
                          size: {
                            value: 0
                          },
                          line_linked: {
                            width: 0,
                            distance: 45
                          }
                          }
                        }}
                  />
      {
          this.state.route === 'home'
          ? <LandingPage onRouteChange = {this.onRouteChange}/>
          : (
            this.state.route == 'findService'
            ? <FindService onRouteChange = {this.onRouteChange}/>
            : (
              this.state.route == 'provideService'
              ? <ProvideService onRouteChange = {this.onRouteChange}/>
              : (
                this.state.route == 'vulnerabilityAnalysis'
                ? <VulnerabilityAnalysis onRouteChange = {this.onRouteChange}/>
                : (
                  this.state.route == 'dashboard'
                  ? <Dashb onRouteChange = {this.onRouteChange}/>
                  : (
                    this.state.route == 'registershop'
                    ? <RegisterShop onRouteChange = {this.onRouteChange}/>
                    : <LandingPage/>
                  )
                  
                )
              )
            )
          )
      }

      </div>
    );
  }
}

export default App;
