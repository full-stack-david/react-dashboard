import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Red',
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [getRandomInt(50, 200),getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            '#CCC',
            '#6FE200',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FC1C2A',
            '#6FE200',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
});

export class ChartDynamicDoughnut extends Component {


    getInitialState() {
        return getState();
    }

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 5000);
    }

    render() {
        return (
            <div>
                <Doughnut data={this.state} height={200}/>
            </div>
        );
    }
}
