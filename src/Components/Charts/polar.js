import React from 'react';
import {Polar} from 'react-chartjs-2';



export default class PolarChart extends React.Component {

  render() {
      const data = {
          datasets: [{
              data: [
                  11,
                  16,
                  7,
                  3,
                  14
              ],
              backgroundColor: [
                  '#FF6384',
                  '#4BC0C0',
                  '#FFCE56',
                  '#E7E9ED',
                  '#36A2EB'
              ],
              label: 'Reviews',
          }],

          labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
      };
    return (
      <div>
        <Polar data={data} height={200}/>
      </div>
    );
  }
};
