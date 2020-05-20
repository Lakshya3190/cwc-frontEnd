import React from 'react';
import {Bar} from 'react-chartjs-2';


const worldSpread = (props) => {

    const {deaths, cases, countries} = props;
    


    let death_stat = []
    const deathstat = deaths.map(
        (user, i) => {
            death_stat.push(parseInt(deaths[i].replace(",", "")));
            {/*death_stat = death_stat.slice(0,5);*/}
        }
        
    )

    let confirmed_stat = []
    const confirmedstat = cases.map(
        (user, i) => {
            confirmed_stat.push(parseInt(cases[i].split(',').join("")));
            
        }
    )

    

    const sta = {
        labels: countries,
        datasets: [
            {
            label: 'Confirmed Cases',
            fill: true,
            fontColor: 'white',
            lineTension: 0.5,
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderWidth: 2,
            data: confirmed_stat
            },
                {
                    label: 'Confirmed Fatalities',
                    fill: true,
                    fontColor: 'white',
                    lineTension: 0.5,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 2,
                    data: death_stat
                    }
        ]
        
    }


    return(
        <div>
            {deathstat}
            {confirmedstat}


            <div>
                <Bar
                data={sta}
                width = {null}
                height = {null}
                options={{
                    responsive: true,
                    type: 'bar',
                    title:{
                    display:true,
                    text:'Worldwide Spread of Covid-19 : Top 50 Nations',
                    fontSize:20,
                    fontColor: 'white'
                    },
                    legend:{
                    display:true,
                    position:'top',
                    fontColor: 'white'
                    }
                }}
                />
            </div>
        </div>
    );
}

export default worldSpread;