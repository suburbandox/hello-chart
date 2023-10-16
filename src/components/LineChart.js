import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js'; 

Chart.register(...registerables);

export default class LineChart extends Component {
    reactRef = React.createRef();

    componentDidMount() {

        this.buildChart();

    }

    componentDidUpdate() {

        this.buildChart();

    }

    buildChart = () => {

        const { data, labels } = this.props; 
        
        //const context = canvas.getContext('2d');
        //var context =canvas.getContext("2d")
        const context = this.reactRef.current.getContext('2d');

        var chart = new Chart(context, {

            type: 'line',
            data: {
                labels: labels, 
                datasets: [
                    {
                        label: 'Revenue',
                        data: data 
                    }
                ]
            }

        })

        console.log(data);

        console.log(labels);

    }

    render() {

        return (

            <canvas ref={this.reactRef} />
 
         )
 


    }

}