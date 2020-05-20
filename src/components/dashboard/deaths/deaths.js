import React from 'react';
import GrowthPercent from './growthpercent/growthpercent.js';
import GrowthStat from './growthstat/growthstat.js';
import IndiaChange from './indiaChange/indiaChange.js';
import WorldSpread from './worldSpread/worldSpread.js';
import AgeSpread from './ageSpread/ageSpread.js';
import './deaths.css';

const death = ({data, india_data, world_data, age_data, onRouteChange}) => {
    

    const percent_array = [];
    const dataArray = data.map(
        (user,i) => {percent_array.push(data[i].ChangeTotalInPercent)}
    );

    const stat_array = [];
    const growthStatArray = data.map(
        (user,i) => {stat_array.push(data[i].ChangeInTotal)}
    );

   
    let total_deaths = [];
    const total = data.map(
        (user,i) => {total_deaths.push(data[i].TotalDeaths)}
    );

    let past_rise = [];
    const prise = data.map(
        (user,i) => {past_rise.push(data[i].ChangeInTotal)}
    );

    let percent_deaths = [];
    const percentR = data.map(
        (user,i) => {percent_deaths.push(data[i].ChangeTotalInPercent)}
    );


    let total_india_deaths = [];
    const tid = india_data.map(
        (user,i) => {total_india_deaths.push(india_data[i].deaths)}
    );

    
    let total_india_cases = [];
    const tic = india_data.map(
        (user,i) => {total_india_cases.push(india_data[i].confirmed)}
    );

    let deaths_india_states = [];
    const cic = india_data.map(
        (user,i) => {deaths_india_states.push(india_data[i].deaths)}
    )

    let recovered_india_states = [];
    const rcic = india_data.map(
        (user,i) => {recovered_india_states.push(india_data[i].recovered)}
    )

    let confirmed_india_states = [];
    const ccic = india_data.map(
        (user,i) => {confirmed_india_states.push(india_data[i].confirmed)}
    )

    let india_states = [];
    const sts = india_data.map(
        (user,i) => {india_states.push(india_data[i].state)}
    )


    let world_deaths = []
    const wd = world_data.map(
        (user, i) => {world_deaths.push(world_data[i].Deaths)}
    )

    let world_confirmed = []
    const wc = world_data.map(
        (user,i) => {world_confirmed.push(world_data[i].Cases)}
    )

    let countries = []
    const c = world_data.map(
        (user,i) => {countries.push(world_data[i].Country)}
    )




    let age_range = []
    const age = age_data.map(
        (user,i) => {age_range.push(age_data[i].Age)}
    )

    let death_rate = []
    const deathRate = age_data.map(
        (user,i) => {death_rate.push(age_data[i].DeathRateAllCases)}
    )

    return(
        <div className = 'plots tc'>
            {dataArray} 
            {growthStatArray}
            {total}
            {prise}
            {percentR}

            {tid}
            {tic}
            {cic}
            {rcic}
            {ccic}
            {sts}

            {wd}
            {wc}
            {c}

            {deathRate}
            {age}

            
            <h1 className = 'f1 head'>Covid 19 Dashboard</h1>
            <p onClick = {() => onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start'}}className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f3 dib pa1 home br3 ml3'>Home</p>

            <h1 className = 'total2  ma2 br3 pointer grow pa3'>World Wide Deaths:<br/> {total_deaths[0]}</h1>
            <h1 className = 'total1  ma2 br3  pointer grow'>World Wide Rise in Cases (Past Day)<br/> {past_rise[0]}</h1>
            <h1 className = 'total3  ma2 br3  pointer grow'>World Wide Percentage Rise in Cases (Past Day) <br/> {percent_deaths[0]}</h1>

            <h1 className = 'total4  ma2 br3  pointer grow'>Total Deaths in India:<br/> {total_india_deaths[0]}</h1>
            <h1 className = 'total5  ma2 br3  pointer grow'>Total Cases in India:<br/> {total_india_cases[0]}</h1>

            
                <div style = {{}} className = 'g1 ma2'>
                    <GrowthPercent className = 'pa2 ma2' percent_array = {percent_array}/>
                </div>

                <div style = {{}} className = 'g2 ma2'>
                    <GrowthStat className = 'pa2 ma2' stat_array = {stat_array}/>
                </div>

                <div style = {{}} className = 'g3 ma2'>
                    <IndiaChange className = 'pa2 ma2' deaths = {deaths_india_states}
                                                       recovered = {recovered_india_states}
                                                       confirmed = {confirmed_india_states}
                                                       states = {india_states}/>

                <div style = {{}} className = 'g5 ma2'> 
                    <AgeSpread className = 'pa2 ma2' age_range = {age_range.slice(0,4)}
                                                     death_rate = {death_rate.slice(0,4)}/>

                
                </div>

                <div style = {{}} className = 'g4 ma2'>
                    <WorldSpread className = 'pa2 ma2' deaths = {world_deaths.slice(0,50)}
                                                       cases = {world_confirmed.slice(0,50)}
                                                       countries = {countries.slice(0,50)}/>

            
        </div> 
        </div>   
        </div>
        );
}



export default death;