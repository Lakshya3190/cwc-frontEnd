import React from 'react';
import './dashboard.css';
import Deaths from './deaths/deaths.js';


class dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            dash_route: 'menu',
            onSubmit: '',
            data: [],
            india_data: [],
            world_data: [],
            age_data: []
        }
    }

    onDashRouteChange = (dash_route) => {
        this.setState({dash_route:dash_route})
    }

    onDeaths = () => {
        fetch('https://covid19-server.chrismichael.now.sh/api/v1/Deaths')
        .then(response => response.json())
        .then(this.onDashRouteChange('dashboard'))
        .then(data => {
            this.setState(Object.assign(this.state.data, {data: data.deaths}))
        })
    }


    onIndiaDeaths = () => {
        fetch('https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates')
        .then((response => response.json()))
        .then(this.onDashRouteChange('dashboard'))
        .then(india_data => {
            this.setState(Object.assign(this.state.india_data, {india_data: india_data.data[0].table}))
        })
    }

    onWorldSpread = () => {
        fetch('https://covid19-server.chrismichael.now.sh/api/v1/CountriesWhereCoronavirusHasSpread')
        .then((response => response.json()))
        .then(this.onDashRouteChange('dashboard'))
        .then(world_data => {
            this.setState(Object.assign(this.state.world_data, {world_data: world_data.table}))
        })
    }

    onAgeSpread = () => {
        fetch('https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByAge')
        .then((response => response.json()))
        .then(this.onDashRouteChange('dashboard'))
        .then(age_data => {
            this.setState(Object.assign(this.state.age_data, {age_data: age_data.table}))
        })
    }

        
    render(){

        {/*
            <div className="">
                    <input onClick = {this.onSubmitQueries} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib form" type="submit" value="Submit"/>
                </div>
         */}

        return(
            <div className = 'dashboard'>
                {
                    this.state.dash_route === 'menu'
                    ? <div className = 'page tc'>
                        <p  onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start', color: 'black'}} className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f3 dib form button pa4 br3'>Home</p>
                        <h1 className = 'f1 db-head'>Track Covid-19</h1>

                        <div className = 'menu'>
                        <p onClick = {() => {this.onDeaths(); this.onIndiaDeaths(); this.onWorldSpread(); this.onAgeSpread()}} className = 'tc ma4 pointer br2 shadow-1 f2 pa3 grow menu-option'>Dashboard</p>
                        </div>
                    </div>
                    : <Deaths onRouteChange = {this.props.onRouteChange} data = {this.state.data} india_data = {this.state.india_data} world_data = {this.state.world_data} age_data = {this.state.age_data}/>
                }
            </div>

    );
}
    
}

export default dashboard;