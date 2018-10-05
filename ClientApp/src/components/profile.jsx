import React, { Component } from 'react';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            profilePictureUrl: null,
            email: null
        };
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="nameInput" placeholder="Ex: Joe Doe" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label for="emailInput">Email address</label>
                        <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        )
    }
}