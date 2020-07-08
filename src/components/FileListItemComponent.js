// This contains the designing for the user profile circles that will be used for the user and nearby users as well
import React, { Component } from 'react';
import './UserAvatarComponent.css';

class UserAvatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FileListItem container">
                <div className="row">
                    <div className="col-6">
                        <p> {this.props.fileName} </p>
                    </div>
                    <div className="col-3">
                        <p> {this.props.fileSize} </p>
                    </div>
                    <div className="col-3">
                        <p> Progress Icon </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserAvatar;
