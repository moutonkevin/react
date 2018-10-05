import React, { Component } from 'react';
import Orders from './orders';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: null
        };
    }

    handleFromChange = (date) => {
        this.setState({
            fromDate: date
        });
    }

    handleToChange = (date) => {
        this.setState({
            toDate: date
        });
    }

    handleTypeClicked = (e) => {
        this.setState({
            type: e.target.value
        });
    }

    searchOrdersClicked = () => {

        let fetchData = {
            method: 'POST',
            body: {
                type: this.state.type,
                fromDate: this.state.fromDate,
                toDate: this.state.toDate
            }
        }

        fetch('api/orders/history', fetchData)
            .then(response => response.json())
            .then(
                (orders) => {
                    this.setState({
                        orders: orders
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <React.Fragment>
                <form className="form-inline mb-2">
                    <div className="mr-1">
                        <select className="form-control" onChange={this.handleTypeClicked}>
                            <option value="all">All orders</option>
                            <option value="delivery">Delivery orders</option>
                            <option value="pickup">Pickup orders</option>
                        </select>
                    </div>
                    <DatePicker className="form-control mr-1"
                        placeholderText="From"
                        selected={this.state.fromDate}
                        onChange={this.handleFromChange} />
                    <DatePicker className="form-control mr-1"
                        placeholderText="To"
                        selected={this.state.toDate}
                        onChange={this.handleToChange} />
                    <button className="btn btn-primary" onClick={this.searchOrdersClicked}>View orders</button>
                </form>
                <Orders />
            </React.Fragment>
        )
    }
}