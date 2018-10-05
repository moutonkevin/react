import React, { Component } from 'react';

export default class Order extends Component {

    render() {
        return (
            <tr>
                <th scope="row">{this.props.value.orderId}</th>
                <td>{this.props.value.type}</td>
                <td>{this.props.value.requestDateTimed}</td>
                <td>{this.props.value.customerAddress}</td>
                <td>{this.props.value.total}</td>
            </tr>
        )
    }
}