import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Desktop Devices',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: '#1addda',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#1addda',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#1addda',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Tablets Devices',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(33, 129, 247,0.4)',
            borderColor: '#2181F7',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#2181F7',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#2181F7',
            pointHoverBorderColor: 'rgba(33, 129, 247,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [60, 44, 55, 70, 80, 60, 70]
        }
        ,
        {
            label: 'Phone Devices',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(255, 206, 86,0.4)',
            borderColor: '#FFCE56',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FFCE56',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#FFCE56',
            pointHoverBorderColor: 'rgba(255, 206, 86,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [50, 68, 60, 71, 50, 70, 80]
        }
    ]
};

export class ChartLine extends Component {
    render() {
        return (
            <div>
                <Line data={data} height={200}/>
            </div>
        );
    }
};
