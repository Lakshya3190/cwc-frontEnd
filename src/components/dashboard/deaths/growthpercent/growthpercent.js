import React from 'react';
import {Line} from 'react-chartjs-2';


const growthPercent = (props) => {

    const {percent_array} = props;
    let int_percent = []

    const intpercent = percent_array.map(
        (user, i) => {
            int_percent.push(parseInt(percent_array[i].split("%")));
            int_percent = int_percent.slice(0,30);
        }
    )

    let mylabels = []
    for(let i=0; i<=30; i++){
        mylabels.push(toString(i))
    }

    let rev_int_percent = int_percent.reverse();

    const state = {
        labels:['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'],
        datasets: [
            {
            label: 'Daily Percentage Rise in Fatalities',
            fontSize: 15,
            fontColor: 'white',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'orange',
            borderColor: 'yellow',
            borderWidth: 2,
            data: rev_int_percent
            }
        ]
        
    }


    return(
        <div>
            {intpercent}
            <div>
                <Line
                data={state}
                options={{
                    borderColor: 'orange',
                    title:{
                    display:true,
                    text:'Daily Percentage Rise in New Cases: 30 Days (World Wide)',
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

export default growthPercent;