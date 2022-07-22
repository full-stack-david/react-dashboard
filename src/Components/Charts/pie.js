import React from 'react';
import {Pie} from 'react-chartjs-2';


export default class PieChart extends React.Component {

    render() {

        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FC1C2A',
                    '#2181F7',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FC1C2A',
                    '#2181F7',
                    '#FFCE56'
                ]
            }]
        };
        return (
            <div>
                <Pie data={data} height={200}/>
            </div>
        );
    }
}
