import React, { Component } from 'react';
import Order from './order';

export default class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: null
        };
    }

    componentDidMount() {
        fetch('api/orders/pending/1/10')
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

    GetOrders() {
        if (this.state.orders) {
            return this.state.orders.map((order) =>
                <Order key={order.orderId} value={order}/>
            );
        }
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Requested for</th>
                        <th scope="col">Address</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.GetOrders()
                    }
                </tbody>
            </table>
        )
    }
}