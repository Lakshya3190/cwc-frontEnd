import React from 'react';
import {Pie} from 'react-chartjs-2';


const ageSpread = (props) => {

    const {age_range, death_rate} = props;
    


    let death_r = []
    const deathstat = death_rate.map(
        (user, i) => {
            death_r.push(parseInt(death_rate[i].replace("%", "")));
            {/*death_stat = death_stat.slice(0,5);*/}
        }
        
    )


    

    const sta = {
        labels: age_range,
        datasets: [
            {
            fill: true,
            fontColor: 'white',
            backgroundColor: ['red', 'green', 'orange', 'blue'],
            data: death_r
            }
        ]
        
    }


    return(
        <div>
            {deathstat}

            <div>
                <Pie
                data={sta}
                width = {null}
                height = '100%'
                options={{
                    responsive: true,
                    title:{
                    display:true,
                    text:'Date Rate (%) By Age',
                    fontSize:20,
                    fontColor: 'white'
                    },
                    legend:{
                    display:true,
                    position:'top',
                    fontColor: 'white'
                    }}}
                />
            </div>
        </div>
    );
}

export default ageSpread;