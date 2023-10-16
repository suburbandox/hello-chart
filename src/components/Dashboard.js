import React, { Component } from 'react';
import LineChart from './LineChart';
import { monthLabels, revenueData } from '../data';


export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {

            labels: monthLabels,
            data: revenueData 

        };

        this.updateData = this.updateData.bind(this);

    }

    updateData() {

        this.setState( {

            labels: monthLabels,
            data: revenueData 

        })

    }

    render() {

        const { labels, data } = this.state; 

        return (

            <div>

                <h1> Monthly Revenue </h1>

                <LineChart data={data} labels={labels} />

            </div>

        )

    }
}