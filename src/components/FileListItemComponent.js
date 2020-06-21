// This contains the designing for the user profile circles that will be used for the user and nearby users as well
import React, { Component } from 'react';
import './UserAvatarComponent.css';

class UserAvatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FileListItem">
                <p> {this.props.fileName} </p>
            </div>
        );
    }
}

export default UserAvatar;
