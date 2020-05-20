import React from 'react';
import {Line} from 'react-chartjs-2';


const growthStat = (props) => {

    const {stat_array} = props;
    let int_stat = []

    const intstat = stat_array.map(
        (user, i) => {
            int_stat.push(parseInt(stat_array[i].replace(",", "")));
            int_stat = int_stat.slice(0,30);
        }
    )

    let mylabels = []
    
    for(let i=0; i<=30; i++){
        mylabels.push(toString(i));
    }

    let rev_int_stat = int_stat.reverse();

    const sta = {
        labels: ['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'],
        datasets: [
            {
            label: 'Change in Daily Total',
            fill: false,
            fontColor: 'white',
            lineTension: 0.5,
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 2,
            data: rev_int_stat
            }
        ]
        
    }


    return(
        <div>
            {intstat}
            <div>
                <Line
                data={sta}
                options={{
                    title:{
                    display:true,
                    text:'Daily Rise in New Cases: Past 30 Days (World Wide)',
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

export default growthStat;