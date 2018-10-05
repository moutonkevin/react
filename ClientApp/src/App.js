import React, { Component } from 'react';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Orders from './components/orders';
import History from './components/history';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProfileClicked: false,
            isOrdersClicked: false,
            isHistoryClicked: false
        };
    }

    handleProfileClick = () => {
        this.setState({
            isProfileClicked: true,
            isOrdersClicked: false,
            isHistoryClicked: false
        });
    }

    handleOrdersClick = () => {
        this.setState({
            isProfileClicked: false,
            isOrdersClicked: true,
            isHistoryClicked: false
        });
    }

    handleHistoryClick = () => {
        this.setState({
            isProfileClicked: false,
            isOrdersClicked: false,
            isHistoryClicked: true
        });
    }

    render() {

        let content = <History />;

        if (this.state.isProfileClicked) {
            content = <Profile />;
        } else if (this.state.isOrdersClicked) {
            content = <Orders />;
        } else if (this.state.isHistoryClicked) {
            content = <History />;
        }

        return (
            <div>
                <NavBar
                    onProfileClick={this.handleProfileClick}
                    onOrdersClick={this.handleOrdersClick}
                    onHistoryClick={this.handleHistoryClick} />
                <div className="m-3">
                    {content}
                </div>
            </div>
        );
    }
}
