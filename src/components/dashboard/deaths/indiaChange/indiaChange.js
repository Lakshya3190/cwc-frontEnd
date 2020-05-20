import React from 'react';
import {Bar} from 'react-chartjs-2';


const indiaChange = (props) => {

    const {deaths, recovered, confirmed, states} = props;
    


    let death_stat = []
    const deathstat = deaths.map(
        (user, i) => {
            death_stat.push(parseInt(deaths[i]));
            {/*death_stat = death_stat.slice(0,5);*/}
        }
        
    )

    let confirmed_stat = []
    const confirmedstat = confirmed.map(
        (user, i) => {
            confirmed_stat.push(parseInt(confirmed[i]));
            
        }
    )

    let recovered_stat = []
    const recoveredstat = recovered.map(
        (user, i) => {
            recovered_stat.push(parseInt(recovered[i]));
            
        }
    )

    
    


    

    const sta = {
        labels: states,
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
                label: 'Confirmed Recoveries',
                fill: true,
                fontColor: 'white',
                lineTension: 0.5,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 2,
                data: recovered_stat
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
            {recoveredstat}
            {console.log(deaths)}


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
                    text:'Spread of Covid-19 in Indian States',
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

export default indiaChange;