// This contains the designing for the user profile circles that will be used for the user and nearby users as well
import React, { Component } from 'react';
import './UserAvatarComponent.css';

class UserAvatar extends Component {
    constructor(props) {
        super(props);
    }
    shareFiles() {
        // Connect to backend
        alert("hi");
    }

    render() {
        return (
            <div className="UserAvatar" onClick={this.shareFiles}>
                <div className="UserAvatarImage" id={`${this.props.userName}Avatar`}>
                  <img className="UserAvatarImageIcon" src={require(`../../assets/UserAvatar${this.props.userIcon}.png`)} alt="Gravatar"></img>         
                </div>
                <div className="UserAvatarName">
                  <p> {this.props.userName} </p>
                </div>
            </div>
        );
    }
}

export default UserAvatar;
