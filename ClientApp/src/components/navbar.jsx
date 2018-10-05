import React, { Component } from 'react';
import MenulogIcon from '../images/menulog_icon.jpg';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: null,
            isProfileClicked: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                        profilePictureUrl: 'https://picsum.photos/20'
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src={MenulogIcon} height="40" alt="icon"/>
                <a className="navbar-brand ml-3" href="">Menulog Order Manager</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.props.onOrdersClick}>Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.props.onHistoryClick}>History</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.state.profilePictureUrl} className="mr-2" alt="profilePicture"/>
                                Thairific
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#" onClick={this.props.onProfileClick}>Your profile</a>
                                <a className="dropdown-item" href="#">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
