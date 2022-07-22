import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


const data = (canvas) => {

    return {
        labels: [
            'Used Space',
            'Cache Used',
            'Free Space',
            'Database Used'
        ],
        datasets: [{
            data: [300, 50, 70, 100],
            backgroundColor: [
                '#FC1C2A',
                '#6FE200',
                '#2181F7',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FC1C2A',
                '#6FE200',
                '#2181F7',
                '#FFCE56'
            ]
        }]
    };
}
const options = {
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    legend: {
        display: true,
        labels: {
            fontColor:  'rgba(0,0,0,.5)'
        },
        position: 'right'
    }
}
export default class ChartDoughnut extends Component {

    render() {
        return (
            <div>
                <Doughnut data={data} options={options} height={200}/>
            </div>
        );
    }
}
